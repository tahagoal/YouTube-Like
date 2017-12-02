import { Component, ViewEncapsulation} from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.main.html',
  styleUrls: ['../assets/css/common.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppMain {
	show_filters:boolean = false;
	upload_variable:string = '';
	type_variable:string = '';
	sort_variable:string = 're';

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

	toggleFilter(){
		this.show_filters = ! this.show_filters;
	};

	upload_filter(upload_string:string){
		if(this.upload_variable == upload_string)
			this.upload_variable = '';
		else
			this.upload_variable = upload_string;
	}

	type(type_string:string){
		if(this.type_variable == type_string)
			this.type_variable = '';
		else
			this.type_variable = type_string;
	}

	sort(sort_string:string){
		this.sort_variable = sort_string;
	}

}
