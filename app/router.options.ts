import type { RouterConfig } from '@nuxt/schema';

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
  scrollBehavior(to, _form, savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (history.state.smooth) {
          resolve({
            el: history.state.smooth,
            behavior: 'smooth',
          });
        }

        if (to.hash) {
          const el = document.querySelector(to.hash) as any;
          if (!el)
            resolve({ el: to.hash, top: 0 });

          const { marginTop } = getComputedStyle(el);
          const marginTopValue = Number.parseInt(marginTop);
          const offset = (document.querySelector(to.hash) as any).offsetTop - marginTopValue;

          resolve({
            top: offset,
            behavior: 'smooth',
          });
        }

        // Scroll to top of window
        if (savedPosition)
          resolve(savedPosition);
        else
          resolve({ top: 0 });
      }, 1); // Hack page wise navigation
    });
  },
};
