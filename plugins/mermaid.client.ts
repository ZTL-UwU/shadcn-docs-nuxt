import { defineNuxtPlugin } from '#app';
import mermaid from 'mermaid';

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
