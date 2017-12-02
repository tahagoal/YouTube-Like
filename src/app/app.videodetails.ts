import { Component, ViewEncapsulation} from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.videodetails.html',
  styleUrls: ['../assets/css/common.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppVideo {
  	constructor(private slimLoadingBarService: SlimLoadingBarService) { }

	ngOnInit(){
		this.startLoading();
	}

	ngAfterContentInit() {
		setTimeout(() => {
			this.completeLoading();
	    }, 1);
	}

	startLoading() {
        this.slimLoadingBarService.start();
    }

    stopLoading() {
        this.slimLoadingBarService.stop();
    }

    completeLoading() {
        this.slimLoadingBarService.complete();
    }
}
