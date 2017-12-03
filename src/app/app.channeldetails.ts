import { Component, ViewEncapsulation, HostListener} from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.channeldetails.html',
  styleUrls: ['../assets/css/common.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppChannel {
  	constructor(private slimLoadingBarService: SlimLoadingBarService) { }	search_result = [];
	
	show_loading:boolean = false;
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
}
