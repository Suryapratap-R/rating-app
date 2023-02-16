<script lang="ts">
  import { fade, scale } from "svelte/transition";
  import { FeedbackStore } from "../store";
  import FeedbackItem from "./FeedbackItem.svelte";

  // let feedback: { id: Number; text: String; rating: Number }[];
  // const unsubscribe = FeedbackStore.subscribe((data) => (feedback = data));

  // onDestroy(() => {
  //   unsubscribe();
  // });
</script>

{#each $FeedbackStore as fb (fb.id)}
  <div in:scale out:fade>
    <FeedbackItem item={fb} />
  </div>
{/each}
