import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs'
import { Http, Response, RequestOptionsArgs, RequestOptions, Headers } from '@angular/http'
import { Database } from './models'

@Injectable()
export class StashService {

  // rest/api/1.0/projects/PIR/repos/target-manager/browse/process.json
  username = " "
  password = " "
  https = "https://"
  stash_url = "bitbucket.di2e.net/"
  stash_api_part = "rest/api/1.0/projects/"
  stash_project = "PIR"

  constructor(private http: Http) {
    
   }

  public getProcessesFile(repoName: String) {
    // https://bitbucket.di2e.net/rest/api/1.0/projects/PIR/repos/target-manager/browse/process.json
    let path = this.stash_url + this.stash_api_part + this.stash_project + "/repos/" + repoName + "/browse/process.json";

    let myHeaders = new Headers();
    myHeaders.set('Authorization', 'Basic ' + btoa(this.username + ':' + this.password))
    myHeaders.set('Access-Control-Allow-Origin', '*')

    let requestOptions: RequestOptionsArgs = {
      method: 'GET',
      headers: myHeaders
    };

    return this.http.request(path, requestOptions)
      .map((response: Response) => {
        if (response.status === 204) {
          return undefined;
        } else {
          return response.json();
        }
      });
  }
  public getRepos() {
    // "https://cors-anywhere.herokuapp.com/" +
    let path = this.stash_url + this.stash_api_part + this.stash_project + "/repos";

    // Uncomment for JSON Server (local)
    // path = "http://localhost:3000/values"

    // Uncomment for cors proxy
    // path = "https://localhost:1337/" + path

    let queryParameters = new URLSearchParams();
    queryParameters.set("limit", "1000")

    let myHeaders = new Headers();
    myHeaders.set('Authorization', 'Basic ' + btoa(this.username + ':' + this.password))
    myHeaders.set('Access-Control-Allow-Origin', '*')
    let options = new RequestOptions({ headers: myHeaders });

    console.log("path " + path);
    console.log("OPTIONS" + JSON.stringify(options));

    let requestOptions: RequestOptionsArgs = {
      method: 'GET',
      headers: myHeaders,
      search: queryParameters
    };

    return this.http.get(path, requestOptions)
      .map((response: Response) => {
        if (response.status === 204) {
          return undefined;
        } else {
          return response.json();
        }
      }).catch(StashService.handleError);
  }

  static handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
