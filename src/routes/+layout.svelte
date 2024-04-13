<script>
	import { FacebookPixel } from '@beyonk/svelte-facebook-pixel';
	import '../app.css';
</script>

<FacebookPixel pixels={[import.meta.env.VITE_META_PIXEL_ID]} />

<div class="min-h-screen">
	<slot />
</div>
