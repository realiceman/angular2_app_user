import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html',
    providers: [PostsService]
})
export class UserComponent  {
    name: string;
    email: string;
    address: address;
    hobbies: string[];
    showHobbies: boolean;
    posts: Post[];

    constructor(private postsService: PostsService){
        console.log("construct ran");
        this.name = 'youssef';
        this.email = 'youss.hark@gmail.com';
        this.address = {
            street: '56 rue du pont',
            city: 'tourcoing',
            state: 'npdc'
        }
        this.hobbies = ["music", "sport","bouffe"];
        this.showHobbies=false;
        this.postsService.getPosts().subscribe(posts => {
            console.log(posts);
            this.posts = posts;
        });
    }

    toggleHobbies(){
        if(this.showHobbies==true){
            this.showHobbies=false;
        }else{
            console.log("show");
            this.showHobbies=true;
        }

    }

    addHobby(hobby: any){
        console.log(hobby);
        this.hobbies.push(hobby);
    }

    deleteHobby(i: any){
        this.hobbies.splice(i,1);
    }
}
interface address{
    street: string;
    city: string;
    state: string;
}

interface Post{
    id: number;
    title: string;
    body: string;

}