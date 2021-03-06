/**
 * Transition - Fade:
 * Simple fadeIn/fadeOut transition using `TweenMax`. Notice`TweenMax` is not
 * required in this file simply because it should be required in your main
 * file and not in transitions files.
 * 
 * @author: Anthodpnt <antho.dpnt@gmail.com>
 * @version: 1.0.0
 */


const Fade = {
  in: (view, done) => {
    TweenMax.fromTo(view, 1, 
      { alpha: 0.0 },
      { alpha: 1.0, onComplete: done },
    );
  },
  out: (view, done) => {
    TweenMax.fromTo(view, 1, 
      { alpha: 1.0 },
      { alpha: 0.0, onComplete: done },
    );
  }
};

export default Fade;