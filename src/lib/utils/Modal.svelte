<script>
    import { fade, slide } from "svelte/transition";

    export let open = false;
    export let style = "";
</script>


{#if open}
    <div class="greywall" transition:fade on:click={() => { open = false; }}></div>

    <div class="modal" style={style} transition:slide>
        <slot></slot>
    </div>
{/if}

<style>
    .greywall {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 99;
        background-color: hsla(0, 0%, 36%, 0.45);
    }

    .modal {
        position: fixed;
        top: 50vh;
        left: 50vw;
        transform: translate(-50%, -50%);
        padding: 10px;
        z-index: 100;
        background-color: #222222;
        border-radius: 10px;
        max-width: 100vw;
        max-height: 100vh;
    }
</style>