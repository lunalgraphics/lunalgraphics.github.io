<script>
    import { page  } from "$app/stores";
    import { base } from "$app/paths";
</script>

<div class="titlesection">
    <div class="centered">
        <h1>{$page.status}</h1>
        <p>{$page.error.message}</p>
        <a href="{base}/bugreport">
            <button>Report a Bug</button>
        </a>
        <a href="{base}/">
            <button>Go Home</button>
        </a>
    </div>
</div>