<script>
    import openIcon from "$lib/assets/icons/burgerOpen.png";
    import closeIcon from "$lib/assets/icons/burgerClose.png";
    import { slide } from "svelte/transition";
    import { onMount } from "svelte";
    import { navigating } from '$app/stores';

    let open = false;

    $: if ($navigating) open = false;
</script>

<div class="burgerMenuToggle"
    on:click={() => { open = !open }}
    style="background-image: url({open?closeIcon:openIcon})"></div>
{#if open}
    <div class="burgerMenu" transition:slide={{ axis: "x" }}>
        <slot></slot>
    </div>
{/if}

<style>
    .burgerMenuToggle {
        display: block;
        position: fixed;
        top: 0;
        right: 0;
        width: 50px;
        height: 50px;
        background-size: contain;
        z-index: 56;
        transition: background-image 0.5s;
        box-sizing: border-box;
        padding: 10px;
        background-origin: content-box;
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;
    }

    .burgerMenu {
        position: fixed;
        width: 100vw;
        height: 100vh;
        overflow-y: auto;
        box-sizing: border-box;
        padding: 10px;
        background-color: #363636;
        top: 0;
        right: 0;
        z-index: 55;
        font-family: 'Orbitron', sans-serif;
        color: #DDDDDD;
        text-align: left;
    }

    :global(.burgerMenu a) {
        display: inline-block;
        box-sizing: border-box;
        width: calc(100vw - 25px);
        padding: 3px 16px;
        color: #DDDDDD;
        text-decoration: none;
        transition: color 0.16s;
    }

    :global(.burgerMenu a:hover) {
        color: deepskyblue;
    }

    :global(.burgerMenu h3) {
        color: grey;
    }
</style>