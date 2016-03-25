import { Component } from "angular2/core";

@Component({
    selector: "blog",
    template: `
        <div>
            <h1>Blog</h1>
            <blockquote class="embedly-card" 
                data-card-key="65020c3545574b5a801619951cf8b02f" 
                data-card-image="https://cdn-images-1.medium.com/max/800/1*K5A-hi9zsmG_SXrtJbjJpg.jpeg" 
                data-card-type="article-full">
                <h4>
                    <a href="https://medium.com/@tomastrajan/vanilla-pattern-for-flux-4cccd734e6fe#.nskov5l2s">
                        How to understand & implement Flux without libraries
                    </a>
                </h4>
                <p>
                In this post I assume that you are familiar with concepts of Flux architecture like dispatcher, 
                actions and stores. If not, please check these articles to get an idea, then come back & continue 
                The main concept at the core of all Flux implementations is that the data must always flow in one 
                direction.
                </p>
            </blockquote>
        </div>
        <script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>
    `
})
export default class BlogComponent {}
