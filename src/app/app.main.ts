import { Component, ViewEncapsulation, HostListener} from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import {OrderByPipe} from './sort.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.main.html',
  styleUrls: ['../assets/css/common.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppMain {
	show_filters:boolean = false;
	show_loading:boolean = false;
	filter_loading:boolean = false;
	upload_variable:string = '';
	type_variable:string = '';
	sort_variable:string = 're';
	search_result = [];
	counter:number = 0;

	all_search_result = [
		{
			"id": 1,
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog",
			"lh" : true,
			"to" : false,
			"we" : false,
			"mo" : false,
			"re" : 1,
			"up" : 3,
			"vi" : 6,
			"ra" : 2,
			"type" : "vi",
			"upload" : "lh"
 		},
		{
			"id": 2,
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog",
			"lh" : true,
			"to" : false,
			"we" : false,
			"mo" : false,
			"re" : 1,
			"up" : 5,
			"vi" : 2,
			"ra" : 5,
			"type" : "vi",
			"upload" : "lh"
		},
		{
			"id": 3,
			"title": "Spongepop SquarePants",
			"tiny": "149 Videos",
			"paragraph" : "23,858 subscribers",
			"video" : false,
			"channel" : true,
			"playlist" : false,
			"img" : "https://yt3.ggpht.com/-zJiJ9QoJYLw/AAAAAAAAAAI/AAAAAAAAAAA/I3wYQ3CsM7Y/s176-c-k-no-mo-rj-c0xffffff/photo.jpg",
			"lh" : false,
			"to" : true,
			"we" : false,
			"mo" : false,
			"re" : 1,
			"up" : 4,
			"vi" : 5,
			"ra" : 1,
			"type" : "ch",
			"upload" : "to"
		},
		{
			"id": 4,
			"title": "Spongepop In Real Life PlayList1",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : false,
			"channel" : false,
			"playlist" : true,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog",
			"lh" : false,
			"to" : true,
			"we" : false,
			"mo" : false,
			"re" : 1,
			"up" : 3,
			"vi" : 3,
			"ra" : 5,
			"type" : "pl",
			"upload" : "to"
		},
		{
			"id": 5,
			"title": "Spongepop In Real Life PlayList2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : false,
			"channel" : false,
			"playlist" : true,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog",
			"lh" : false,
			"to" : true,
			"we" : false,
			"mo" : false,
			"re" : 1,
			"up" : 4,
			"vi" : 2,
			"ra" : 1,
			"type" : "pl",
			"upload" : "to"
		},
		{
			"id": 6,
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog",
			"lh" : true,
			"to" : false,
			"we" : false,
			"mo" : false,
			"re" : 1,
			"up" : 4,
			"vi" : 5,
			"ra" : 6,
			"type" : "vi",
			"upload" : "lh"
		},
		{
			"id": 7,
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog",
			"lh" : true,
			"to" : false,
			"we" : false,
			"mo" : false,
			"re" : 1,
			"up" : 4,
			"vi" : 1,
			"ra" : 5,
			"type" : "vi",
			"upload" : "lh"
		},
		{
			"id": 8,
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog",
			"lh" : true,
			"to" : false,
			"we" : false,
			"mo" : false,
			"re" : 1,
			"up" : 5,
			"vi" : 6,
			"ra" : 1,
			"type" : "vi",
			"upload" : "lh"
		},
		{
			"id": 9,
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog",
			"lh" : false,
			"to" : false,
			"we" : true,
			"mo" : false,
			"re" : 1,
			"up" : 3,
			"vi" : 5,
			"ra" : 4,
			"type" : "vi",
			"upload" : "we"
		},
		{
			"id": 10,
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog",
			"lh" : true,
			"to" : false,
			"we" : true,
			"mo" : false,
			"re" : 1,
			"up" : 1,
			"vi" : 1,
			"ra" : 1,
			"type" : "vi",
			"upload" : "we"
		},
		{
			"id": 11,
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog",
			"lh" : false,
			"to" : true,
			"we" : false,
			"mo" : false,
			"re" : 1,
			"up" : 5,
			"vi" : 1,
			"ra" : 5,
			"type" : "vi",
			"upload" : "to"
		},
		{
			"id": 12,
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog",
			"lh" : true,
			"to" : false,
			"we" : false,
			"mo" : false,
			"re" : 1,
			"up" : 3,
			"vi" : 6,
			"ra" : 2,
			"type" : "vi",
			"upload" : "lh"
		},
		{
			"id": 13,
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog",
			"lh" : true,
			"to" : false,
			"we" : false,
			"mo" : false,
			"re" : 1,
			"up" : 3,
			"vi" : 6,
			"ra" : 2,
			"type" : "vi",
			"upload" : "lh"
		},
		{
			"id": 14,
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog",
			"lh" : true,
			"to" : false,
			"we" : false,
			"mo" : false,
			"re" : 1,
			"up" : 3,
			"vi" : 6,
			"ra" : 2,
			"type" : "vi",
			"upload" : "lh"
		},
		{
			"id": 15,
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog",
			"lh" : true,
			"to" : false,
			"we" : false,
			"mo" : false,
			"re" : 1,
			"up" : 3,
			"vi" : 6,
			"ra" : 2,
			"type" : "vi",
			"upload" : "lh"
		},
		{
			"id": 16,
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog",
			"lh" : true,
			"to" : false,
			"we" : false,
			"mo" : false,
			"re" : 1,
			"up" : 3,
			"vi" : 6,
			"ra" : 2,
			"type" : "vi",
			"upload" : "lh"
		},
		{
			"id": 17,
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog",
			"lh" : true,
			"to" : false,
			"we" : false,
			"mo" : false,
			"re" : 1,
			"up" : 3,
			"vi" : 6,
			"ra" : 2,
			"type" : "vi",
			"upload" : "lh"
		},
		{
			"id": 18,
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog",
			"lh" : true,
			"to" : false,
			"we" : false,
			"mo" : false,
			"re" : 1,
			"up" : 3,
			"vi" : 6,
			"ra" : 2,
			"type" : "vi",
			"upload" : "lh"
		},
		{
			"id": 19,
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog",
			"lh" : true,
			"to" : false,
			"we" : false,
			"mo" : false,
			"re" : 1,
			"up" : 3,
			"vi" : 6,
			"ra" : 2,
			"type" : "vi",
			"upload" : "lh"
		},
		{
			"id": 20,
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog",
			"lh" : true,
			"to" : false,
			"we" : false,
			"mo" : false,
			"re" : 1,
			"up" : 3,
			"vi" : 6,
			"ra" : 2,
			"type" : "vi",
			"upload" : "lh"
		},
		{
			"id": 21,
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog",
			"lh" : true,
			"to" : false,
			"we" : false,
			"mo" : false,
			"re" : 1,
			"up" : 3,
			"vi" : 6,
			"ra" : 2,
			"type" : "vi",
			"upload" : "lh"
		},
		{
			"id": 22,
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog",
			"lh" : true,
			"to" : false,
			"we" : false,
			"mo" : false,
			"re" : 1,
			"up" : 3,
			"vi" : 6,
			"ra" : 2,
			"type" : "vi",
			"upload" : "lh"
		},
		{
			"id": 23,
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog",
			"lh" : true,
			"to" : false,
			"we" : false,
			"mo" : false,
			"re" : 1,
			"up" : 3,
			"vi" : 6,
			"ra" : 2,
			"type" : "vi",
			"upload" : "lh"
		},
		{
			"id": 24,
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog",
			"lh" : true,
			"to" : false,
			"we" : false,
			"mo" : false,
			"re" : 1,
			"up" : 3,
			"vi" : 6,
			"ra" : 2,
			"type" : "vi",
			"upload" : "lh"
		},
		{
			"id": 25,
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog",
			"lh" : true,
			"to" : false,
			"we" : false,
			"mo" : false,
			"re" : 1,
			"up" : 3,
			"vi" : 6,
			"ra" : 2,
			"type" : "vi",
			"upload" : "lh"
		},
		{
			"id": 26,
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog",
			"lh" : true,
			"to" : false,
			"we" : false,
			"mo" : false,
			"re" : 1,
			"up" : 3,
			"vi" : 6,
			"ra" : 2,
			"type" : "vi",
			"upload" : "lh"
		},
		{
			"id": 27,
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog",
			"lh" : true,
			"to" : false,
			"we" : false,
			"mo" : false,
			"re" : 1,
			"up" : 3,
			"vi" : 6,
			"ra" : 2,
			"type" : "vi",
			"upload" : "lh"
		},
		{
			"id": 28,
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog",
			"lh" : true,
			"to" : false,
			"we" : false,
			"mo" : false,
			"re" : 1,
			"up" : 3,
			"vi" : 6,
			"ra" : 2,
			"type" : "vi",
			"upload" : "lh"
		},
		{
			"id": 29,
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog",
			"lh" : true,
			"to" : false,
			"we" : false,
			"mo" : false,
			"re" : 1,
			"up" : 3,
			"vi" : 6,
			"ra" : 2,
			"type" : "vi",
			"upload" : "lh"
		},
		{
			"id": 30,
			"title": "Spongepop In Real Life Ep2",
			"tiny": "JChaseFilms • 54M views • 1 year ago",
			"paragraph" : "Welcome to SpongeBob's Place where you can eat all the Krabby Patties you want! If you love Nickelodeon, hit the subscribe",
			"video" : true,
			"channel" : false,
			"playlist" : false,
			"img" : "https://i.ytimg.com/vi/Q-W1kj4vHRk/hqdefault.jpg?sqp=-oaymwEXCPYBEIoBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB-gN9uhutpe9jSjBYGj4h0IgMVog",
			"lh" : true,
			"to" : false,
			"we" : false,
			"mo" : false,
			"re" : 1,
			"up" : 3,
			"vi" : 6,
			"ra" : 2,
			"type" : "vi",
			"upload" : "lh"
		}
	]

	constructor(private slimLoadingBarService: SlimLoadingBarService) { }

	@HostListener("window:scroll", [])
	  onWindowScroll() {
	  	if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
	  		if(this.counter < this.all_search_result.length && (this.upload_variable == '' && this.type_variable == '')){
				this.show_loading = true;
		  		setTimeout(() => {
		  			this.reach_bottom();
					this.show_loading = false;
			    }, 1000);
		  	}
	    }
	}

	reach_bottom(){
		if (this.upload_variable == '' && this.type_variable == ''){
			if(this.counter < this.all_search_result.length){
				setTimeout(() => {
				for(let i = this.counter; i < this.counter+10 ; i++){
					this.search_result[i] = this.all_search_result[i];
				}
					this.counter = this.counter+10;
			    }, 100);
			}
		}
		else{

		}
	}

	ngOnInit(){
		this.startLoading();
		this.load_result_data();
	}

	load_result_data(){
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

		this.filter_loading = true;
		this.show_filters = false;
		setTimeout(() => {
			this.update_result();
			this.filter_loading = false;
	    }, 1000);
	}

	type(type_string:string){
		if(this.type_variable == type_string)
			this.type_variable = '';
		else
			this.type_variable = type_string;

		this.filter_loading = true;
		this.show_filters = false;
		setTimeout(() => {
			this.update_result();
			this.filter_loading = false;
	    }, 1000);
	}

	sort(sort_string:string){
		this.sort_variable = sort_string;
		this.filter_loading = true;
		this.show_filters = false;
		setTimeout(() => {
			this.filter_loading = false;
	    }, 1000);
	}


	//Not usable function
	sort_result(prop){
		this.search_result.sort(
			function(a, b) {
			if(prop == 're')
		    	return parseFloat(a.re) - parseFloat(b.re);
		    else if(prop == 'up')
		    	return parseFloat(a.up) - parseFloat(b.up)
		    else if(prop == 'vi')
		    	return parseFloat(a.vi) - parseFloat(b.vi)
		    else
		    	return parseFloat(a.ra) - parseFloat(b.ra);
		});
	}

	update_result(){
		if(this.upload_variable == '' && this.type_variable == '')
			this.load_result_data();

		else if(this.upload_variable || this.type_variable){
			this.search_result = [];
			for(let i = 0; i < this.all_search_result.length ; i++){
				if(this.type_variable == ''){
					if(this.all_search_result[i].upload == this.upload_variable){
						this.search_result.push(this.all_search_result[i]);
					}
				}
				else if(this.upload_variable == ''){
					if(this.all_search_result[i].type == this.type_variable){
						this.search_result.push(this.all_search_result[i]);
					}
				}
				else{
					if(this.all_search_result[i].type == this.type_variable && this.all_search_result[i].upload == this.upload_variable){
						this.search_result.push(this.all_search_result[i]);
					}
				}
			}
			this.counter = this.search_result.length;
		}
	}

}
