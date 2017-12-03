import { Component, ViewEncapsulation, HostListener} from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.main.html',
  styleUrls: ['../assets/css/common.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppMain {
	show_filters:boolean = false;
	show_loading:boolean = false;
	upload_variable:string = '';
	type_variable:string = '';
	sort_variable:string = 're';
	search_result = [];
	counter:number = 0;

	all_search_result = [
		{
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog"
		},
		{
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog"
		},
		{
			"title": "Spongepop SquarePants",
			"tiny": "149 Videos",
			"paragraph" : "23,858 subscribers",
			"video" : false,
			"channel" : true,
			"playlist" : false,
			"img" : "https://yt3.ggpht.com/-zJiJ9QoJYLw/AAAAAAAAAAI/AAAAAAAAAAA/I3wYQ3CsM7Y/s176-c-k-no-mo-rj-c0xffffff/photo.jpg"
		},
		{
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : false,
			"channel" : false,
			"playlist" : true,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog"
		},
		{
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : false,
			"channel" : false,
			"playlist" : true,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog"
		},
		{
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog"
		},
		{
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog"
		},
		{
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog"
		},
		{
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog"
		},
		{
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog"
		},
		{
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog"
		},
		{
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog"
		},
		{
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog"
		},
		{
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog"
		},
		{
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog"
		},
		{
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog"
		},
		{
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog"
		},
		{
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog"
		},
		{
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog"
		},
		{
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog"
		},
		{
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog"
		},
		{
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog"
		},
		{
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog"
		},
		{
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog"
		},
		{
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog"
		},
		{
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog"
		},
		{
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog"
		},
		{
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog"
		},
		{
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog"
		},
		{
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog"
		}
	]

	constructor(private slimLoadingBarService: SlimLoadingBarService) { }

	@HostListener("window:scroll", [])
	  onWindowScroll() {
	  	if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
	  		if(this.counter < this.all_search_result.length){
				this.show_loading = true;
		  		setTimeout(() => {
		  			this.reach_bottom();
					this.show_loading = false;
			    }, 1000);
		  	}
	    }
	}

	reach_bottom(){
		if(this.counter < this.all_search_result.length){
			setTimeout(() => {
			for(let i = this.counter; i < this.counter+10 ; i++){
				this.search_result[i] = this.all_search_result[i];
			}
				this.counter = this.counter+10;
		    }, 100);
		}
	}

	ngOnInit(){
		this.startLoading();
		for(let i = 0; i<10 ; i++){
			this.search_result[i] = this.all_search_result[i];
		}
		this.counter = 10;
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
