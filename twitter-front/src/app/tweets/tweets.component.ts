import { Component, OnInit } from '@angular/core';
import { TweetService } from '../tweet.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {


  textTweet = '';
  tweets = [];

  constructor(private tweetService: TweetService) { }

  ngOnInit() {
    this.tweetService.getTwettersFromUser(1)
      .subscribe(r => this.tweets = r.results, error => console.log(error));
  }

  sendTweet(): void {
    this.tweetService.postTwett(this.textTweet, 1)
      .subscribe(() => {
        this.textTweet = '';
        this.tweetService.getTwettersFromUser(1)
          .subscribe(r => this.tweets = r.results, error => console.log(error));
      }, error => console.log(error));

  }

}
