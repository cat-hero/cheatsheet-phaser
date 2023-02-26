import { BaseScene } from "./baseScene";
import { Align } from "../common/util/align";
//
//
//
export class SceneMain extends BaseScene {
  constructor() {
    super("SceneMain");
  }
  preload() {
    this.load.image("logo", "../assets/images/face.png");
  }
  create() {
    //set up the base scene
    super.create();
    //set the grid for the scene
    this.makeAlignGrid(11, 11);
    //show numbers for layout and debugging
    //
    const logo = this.add.image(0, 0, "logo");
    this.aGrid.showNumbers();
    this.placeImage("logo", 60, 0.1);
    // this.aGrid.placeAtIndex(7, logo);
    //

    //
    //
    this.makeUi();
  }

  makeUi() {
    super.makeSoundPanel();
    super.makeGear();
  }
  update() {}
}
