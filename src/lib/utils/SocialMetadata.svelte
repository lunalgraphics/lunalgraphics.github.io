<script>
    export let imgURL = "";
    export let pageURL = "";
    export let desc;
    export let title;
    export let imgAlt = "";
</script>


<meta name="description" content={desc} />
<meta property="og:title" content={title} />
<meta property="og:type" content="article" />
<meta property="og:description" content={desc} />
<meta property="og:image" content={imgURL} />
<meta property="og:url" content={pageURL} />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={desc} />
<meta name="twitter:image" content={imgURL} />
<meta name="twitter:image:alt" content={imgAlt} />
<meta name="twitter:card" content="summary_large_image" />