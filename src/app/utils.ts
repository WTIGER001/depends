import { Router } from '@angular/router';
import { DataService } from './data.service'
import { GraphItem } from './models'
import { LocalStorageService } from 'angular-2-local-storage'

export class Utils {
    public large = false
    public selected: GraphItem
    public prefs: any

    constructor(
        private localStorage: LocalStorageService,
        private router: Router,
        private data: DataService,
        private LOCAL_STORAGE_KEY,
        private prefTemplate = {},
        private onResetPrefs: Function) {

        this.readPrefs()
        this.watchMedia()
    }

    public readPrefs() {
        // Read Prefereces
        let str = <string>this.localStorage.get(this.LOCAL_STORAGE_KEY)
        if (str) {
            this.prefs = JSON.parse(str)
        } else {
            this.prefs = {}
            Object.assign(this.prefs, this.prefTemplate)
        }
    }

    public watchMedia() {
        let mq = window.matchMedia("(min-width: 992px)");
        this.large = mq.matches
        mq.addListener(newMatch => {
            console.log("Media Query " + newMatch.matches + " IS LARGE");
            this.large = newMatch.matches
        });
    }

    public edit() {
        if (this.selected) {
            this.router.navigate(['/edit', this.selected.data.id]);
        }
    }

    public view(r: any) {
        if (r) {
            this.router.navigate(['/view', r.item.data.id]);
        }
        if (this.selected) {
            this.router.navigate(['/view', this.selected.data.id]);
        }
    }

    public newItem() {
        this.router.navigate(['/edit'])
    }

    public newEdge() {
        this.router.navigate(['/edit_edge'])
    }

    public savePrefs() {
        let str = JSON.stringify(this.prefs)
        this.localStorage.set(this.LOCAL_STORAGE_KEY, str)
    }

    public resetPreferences() {
        this.prefs = {}
        Object.assign(this.prefs, this.prefTemplate)
        this.savePrefs()
        if (this.onResetPrefs) {
            this.readPrefs.apply(this)
        }
    }
}

