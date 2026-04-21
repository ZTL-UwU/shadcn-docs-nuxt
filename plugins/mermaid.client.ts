import mermaid from 'mermaid';
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(() => {
  mermaid.initialize({
    startOnLoad: false,
    theme: 'default',
    flowchart: {
      curve: 'basis',
      useMaxWidth: true,
      htmlLabels: true,
    },
    sequence: {
      actorMargin: 50,
      showSequenceNumbers: false,
    },
  });

  return {
    provide: {
      mermaidInstance: mermaid,
    },
  };
});
