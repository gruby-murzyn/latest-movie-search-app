import {Injectable} from '@angular/core'; 
import { FormsModule } from '@angular/forms';  //<<<< import it here
import {Jsonp} from '@angular/http'; //Importing Javascript object notatin 
import 'rxjs/Rx'; //RxJS is a library for reactive programming using Observables, Reactive Extension for javascript

@Injectable() //lets Angular know that a class can be used with the dependency injector.
export class MoviesService{
    apikey: string; //Declaration of string for storing API key obtain from website
    searchStr: string; //String for searching movies 
    searchRes:Array<Object>;
    constructor(private _jsonp:Jsonp){ //constructor
        this.apikey ='1b3f542fa57bb850c6da9f1f4a6dc28a'; //api key initilized
      
    }
//we create a method to get popular movies using get method and map to json
    getPopular(){
        return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key=2931998c3a80d7806199320f76d65298')
            .map(res => res.json());
    }
    //we create a method to get popular movies in theater using get method and map to json
     getInTheaters(){
        return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2016-06-20&primary_release_date.lte=2018-01-01&sort_by=popularity.desc&api_key=2931998c3a80d7806199320f76d65298')
            .map(res => res.json());
    }
    
    searchMovies(searchStr: string){
        return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query='+searchStr+'&sort_by=popularity.desc&api_key='+this.apikey)
        .map(res => res.json());
    }
    
    getMovie(id:string){
        return this._jsonp.get('https://api.themoviedb.org/3/movie/'+id+'?callback=JSONP_CALLBACK&api_key='+this.apikey)
        .map(res => res.json());
    }

}