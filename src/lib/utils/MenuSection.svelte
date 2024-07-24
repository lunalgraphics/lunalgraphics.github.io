<script>
    import { clickOutside } from "$lib/helpers/clickOutside";
    import { slide } from "svelte/transition";

    export let title = "Empty Section";

    let collapsed = true;
    let titleButton;
</script>

<span on:click={() => { collapsed = false; }}
    bind:this={titleButton}
    class="titleButton"
    style={collapsed?"":"color: deepskyblue;"}>{title}</span>

{#if !collapsed}
    <div style="position: fixed;
        top: {titleButton.getBoundingClientRect().top + titleButton.getBoundingClientRect().height}px;
        left: {titleButton.getBoundingClientRect().left}px;"
        class="dropdown"
        use:clickOutside
        on:outclick={() => { setTimeout(() => { collapsed = true; }, 10); }}
        on:click={() => { collapsed = true; }}
        transition:slide>
        <slot></slot>
    </div>
{/if}

<style>
    .dropdown {
        user-select: none;
        padding: 8px;
        background-color: #363636;
        color: #DDDDDD;
        text-align: left;
    }

    :global(.dropdown a) {
        display: inline-block;
        box-sizing: border-box;
        width: 100%;
        padding: 3px 16px;
        color: #DDDDDD;
        text-decoration: none;
        transition: color 0.16s;
    }

    :global(.dropdown a:hover) {
        color: deepskyblue;
    }

    .titleButton {
        display: inline-block;
        height: 50px;
        padding: 0 16px;
        color: #DDDDDD;
        line-height: 50px;
        user-select: none;
        cursor: pointer;
        transition: color 0.16s;
    }

    .titleButton:hover {
        color: deepskyblue;
    }
</style>