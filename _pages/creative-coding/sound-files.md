---
title: Sound Files
---
## NOTE:
To use the sound library, we have to include the [p5.sound library](https://p5js.org/reference/#/libraries/p5.sound) in our project's `index.html` file after the p5.js file, like this:

```html
<script src="https://cdn.jsdelivr.net/npm/p5@2.3.1/lib/p5.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/p5.sound@0.4.1/dist/p5.sound.min.js"></script>
```

## Playing Sounds
Let's use some html elements in a sketch to create a simple sound player.

First, we'll load an audio file using the [`loadSound()`](https://p5js.org/reference/#/p5/loadSound) function and test it. This is similar to how we have loaded images, text files, datasets, etc using the `preload()` function.

The `loadSound()` function returns a [`SoundFile`](https://p5js.org/reference/#/p5.SoundFile) object, and we can use its [`play()`](https://p5js.org/reference/#/p5.SoundFile/play) function to play the song whenever we click the mouse:

{% include p5-editor.html id="kZLiBslTX" %}

What happens if we click the mouse multiple times? It sounds like the `song` object starts playing the file multiple times over itself.

We can check if the object is already playing the file and only call `play()` if it's not. We can also use [`isPlaying()`](https://p5js.org/reference/#/p5.SoundFile/isPlaying) to change the background color as an indication of the play state:

{% include p5-editor.html id="hABEaYEA1" %}

## Sound Player
Now that we know how to play a sound file, let's organize our sound player.

We are going to have $$3$$ buttons: skip to beginning, play/pause and stop. Our song also has $$3$$ states it can be in: `PLAYING`, `PAUSED` and `STOPPED`. The skip to beginning button always resets the song's playing position, but it doesn't change what state it's in. The other buttons make the song change states between `PLAYING`, `PAUSED` and `STOPPED`.

This state diagram specifies the changes related to $$2$$ of our buttons:

<div class="scaled-images left w75">
  <img src = "{{ '/assets/images/creative-coding/sound-files-00.jpg' | relative_url }}"/>
</div>

We can *read* the state diagram by starting with its initial state and considering its transitions.

This state diagram starts at a state called `STOPPED`, and it transitions to state `PLAYING` whenever the `play` button is pressed. If the `stop` button is pressed, it stays in the `STOPPED` state.

One it's in the `PLAYING` state, pressing the `stop` button changes the state to `STOPPED` and pressing the `pause` button changes it to `PAUSED`.

Likewise, in the `PAUSED` state, pressing the `stop` button changes the state to `STOPPED` and pressing the `play` button changes it to `PLAYING`.

Now we can add what happens when the `back` button is pressed:

<div class="scaled-images left w75">
  <img src = "{{ '/assets/images/creative-coding/sound-files-01.jpg' | relative_url }}"/>
</div>

What this diagram is saying is that, no matter what state we're in, if the `back` button is pressed, we should reset the song back to its beginning, and stay in whatever state we're in.

Let's write some pseudo-code:

{% include p5-editor.html id="r5r5Y3QRq" %}

We'll have to double check some things that aren't so clear from the documentation, like whether the [`stop()`](https://p5js.org/reference/#/p5.SoundFile/stop) function also resets the tracks position, and what happens if we call [`jump(0)`](https://p5js.org/reference/#/p5.SoundFile/jump) on a file that is not playing.

Let's use this code to check:

{% include p5-editor.html id="SLCmRcdbd" %}

Some things to note about the code:

1. The [`jump()`](https://p5js.org/reference/#/p5.SoundFile/jump) function only works if the file is playing, so we had to use an extra global variable to keep track of whether the file should restart after a pause.
2. The buttons could probably be in a class, since they have the same size and style and right now there's lots of repeated code.

Let's make a [class](../../coding/classes/) for our buttons to encapsulate their style and behavior:

{% include p5-editor.html id="H4SNKePvH" %}

Now, let's add a fourth button for skipping to the next song, and detect double clicks on the back button to skip to the previous song:

{% include p5-editor.html id="gBeE2zqYi" %}

Again, there's some extra logic that we have to use to set `shouldRestart` every time we change songs or states while paused.

## Seeing Sound

Let's visualize the songs while they're playing.

The p5.js `SoundFile` object doesn't have any function or variable that tells us the exact values of the samples that are currently playing. It has a [`getPeaks()`](https://p5js.org/reference/#/p5.SoundFile/getPeaks) function, which gives us a simplified, resampled version of the values for the *entire* sound file at once. That's handy for looking at a whole song's overall shape, but it's precomputed for the whole file — it doesn't tell us what's happening *right now*.

If we just want to know how loud the song is at this moment, we read that directly with an amplitude reader. p5.sound gives us the `p5.Amplitude` object for this. We create one and route our song's signal into it:

```js
let amp;

function setup() {
  amp = new p5.Amplitude();
  song.connect(amp);
}
```

An `Amplitude` measures the energy of whatever audio is fed into it, smoothed over a short window of time. Each frame in `draw()` we call [`getLevel()`](https://p5js.org/reference/#/p5.Amplitude/getLevel) and it hands back a number between $$[0, 1]$$ — roughly how loud the song is playing right now, which is to say the same thing our ears are hearing.

```js
let level = amp.getLevel();
let diam = map(level, 0, 1, 0, width);
ellipse(width / 2, height / 2, diam, diam);
```

The [`map()`](https://p5js.org/reference/#/p5/map) function takes the level in the range of $$[0, 1]$$ and turns it into a diameter in pixels, so the ellipse grows and shrinks with the music.

The raw level is read from the audio graph in real time, so it's already synchronized with what we hear. The level is just whatever is playing at this moment.

The level can be a bit jumpy from frame to frame. If we want it to swell with the song rather than twitch, we can smooth each frame:

```js
function draw() {
  // higher value is smoother
  let smoothing = .85;
  analysis.smooth(smoothing);
  amplitude = analysis.getLevel();
  let diam = map(amplitude, 0, 1, 0, width);
  ellipse(width / 2, height / 2, diam, diam);
}
```