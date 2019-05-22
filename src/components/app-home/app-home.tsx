import { Component, Prop } from '@stencil/core';
import { Person } from './person';
@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {
@Prop() name:string;
@Prop() person:Person;
  render() {
    return (
      <div class='app-home'>
        <p>
          Welcome to the Stencil App Starter.
          You can use this starter to build entire apps all with
          web components using Stencil!
          Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
        </p>

        <stencil-route-link url='/profile/stencil'>
          <button>
            Profile page
          </button>
          <span>
            {this.name}
          </span>
          <b>
            {this.person.name}
          </b>
        </stencil-route-link>
      </div>
    );
  }
}
