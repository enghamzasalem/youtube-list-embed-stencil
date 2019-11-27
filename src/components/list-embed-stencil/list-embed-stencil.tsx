import { Component, Host, Prop, h } from "@stencil/core";

@Component({
  tag: "youtube-list-embed-stencil",
  styleUrl: "list-embed-stencil.css",
  shadow: true
})
export class ListEmbedStencil {
  @Prop() width: string;
  @Prop() height: string;
  @Prop() listid: string;

  render() {
    return (
      <iframe
        width={this.width}
        height={this.height}
        src={"https://www.youtube.com/embed/videoseries?list=" + this.listid}
      ></iframe>
    );
  }
}
