
function New-Zip($zipfilename)
{
    Write-Host ("New-ZIP " + $zipfilename)
	set-content $zipfilename ("PK" + [char]5 + [char]6 + ("$([char]0)" * 18))
	(dir $zipfilename).IsReadOnly = $false

}

function Add-Zip($zipfilename, $tozip)
{
    Write-Host ("ADD-ZIP " + $zipfilename + " " + $tozip)

	if(-not (test-path($zipfilename)))
	{
		set-content $zipfilename ("PK" + [char]5 + [char]6 + ("$([char]0)" * 18))
		(dir $zipfilename).IsReadOnly = $false	
	}
	
	$shellApplication = new-object -com shell.application
	$zipPackage = $shellApplication.NameSpace($zipfilename)
	
	
    $zipPackage.CopyHere($tozip)
    Start-sleep -milliseconds 500
	
}

$uname = Read-Host 'DI2E Username?' 
$pass = Read-Host 'What is your password?' -AsSecureString
$pass = [Runtime.InteropServices.Marshal]::PtrToStringAuto(
    [Runtime.InteropServices.Marshal]::SecureStringToBSTR($pass))

Write-Host ("U " + $uname)
Write-Host ("P " + $pass)
$dir = "C:\users\johnb\Documents\data\"
$repofile = $dir + "repos.json"
$base64AuthInfo = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes(("{0}:{1}" -f $uname,$pass)))

Write-Host ("A " + $base64AuthInfo)

Invoke-RestMethod -Headers @{Authorization=("Basic {0}" -f $base64AuthInfo)} -Uri https://bitbucket.di2e.net/rest/api/1.0/projects/PIR/repos?limit=1000 -OutFile $repofile

$jsonResponse = Invoke-RestMethod -Headers @{Authorization=("Basic {0}" -f $base64AuthInfo)} -Uri https://bitbucket.di2e.net/rest/api/1.0/projects/PIR/repos?limit=1000

$dir = "C:\users\johnb\Documents\data\"
$zip = $dir + "db.zip"

New-Zip $zip
Add-Zip $zip $repofile

foreach($obj in $jsonResponse.values)
{
    Write-Host ("Got " + $obj.slug)
    $outfile = $dir+$obj.slug+".json"
    $path = "https://bitbucket.di2e.net/projects/PIR/repos/" + $obj.slug + "/browse/process.json?raw"

    try {
    Write-Host ("PATH  " + $path)
    Invoke-RestMethod -Headers @{Authorization=("Basic {0}" -f $base64AuthInfo)} -Uri $path -OutFile $outfile
    
    Add-Zip $zip $outfile
    } catch {

    }
}
