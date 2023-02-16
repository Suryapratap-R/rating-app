<script lang="ts">
  import { FeedbackStore } from "../store";


  $: count = $FeedbackStore.length;
  $: average =
    $FeedbackStore.reduce((prev, { rating }) => prev + rating, 0) / count;
</script>

<div class="feedback-stats">
  <h4>{count} Reviews</h4>
  <h4>Rating Average: {average}</h4>
</div>

<style>
  .feedback-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
