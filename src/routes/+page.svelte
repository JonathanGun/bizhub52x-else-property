<script>
	import logo from '$lib/assets/bizhub52x.png';
	import imgPintuTol from '$lib/assets/pintu-tol-ikn.png';
	import imgTerminal from '$lib/assets/terminal-peti-kemas-karingau.png';
	import imgAirport from '$lib/assets/airport-sepingan.png';

	const selling_points = [
		{
			title: 'Start Price',
			value: '2,6 M',
			description: 'Developer Terpercaya'
		},
		{
			title: 'Cicilan',
			value: '60x',
			description: 'Belum Lunas Sudah Tersewa'
		},
		{
			title: 'Bunga',
			value: '0%',
			description: 'Pasti Untung!!'
		}
	];
	const locations = [
		{
			name: 'Terminal Peti Kemas Karingau',
			distance: '10 MNT',
			image: imgTerminal
		},
		{
			name: 'Airport International Sepinggan',
			distance: '20 MNT',
			image: imgAirport
		},
		{
			name: 'Pintu Tol IKN dan Samarinda',
			distance: '10 MNT',
			image: imgPintuTol
		}
	];
	const specs = [
		{
			description: '30 HA'
		},
		{
			description: '745 Unit'
		},
		{
			description: '39 m Entrance'
		},
		{
			description: 'One Way System'
		},
		{
			description: 'One Gate System'
		}
	];
	const descriptions = {
		title: 'Multipurpose',
		description:
			'Dapat di gunakan untuk beberapa utilitas sesuai dengan kebutuhan bisnis anda, lokasi yang sangat strategis di pintu gerbang ikn dan kalimantan timur. Balik papan ada lah juga kota industri, Oil & Gas, Smelter Nickel, Oil Refinery, Coal Mining, Palm Oil plantation.',
		details: [
			{
				title: 'Warehouse',
				description:
					'Lokasi yang sangat strategis dan dekat pelabuhan dan airport international membuat fungsi gudang ini sangat efesien dan high value.'
			},
			{
				title: 'Site Office',
				description:
					'Dilengkapi dengan Office 2 Lantai yang dapat di sesuaikan dengan permintaan jika pembelian beberapa unit gandeng sesuai dengan kebutuhan.'
			},
			{
				title: 'Industrial',
				description:
					'Ijin Kawasan sudah di lengkapi dengan Ijin Industri, sehingga pengguna dapat melakukan kegiatan manufacturing, repackaging, assembly dll.'
			}
		]
	};

	const tailwindCls = {
		container: 'min-h-screen flex items-center',
		dark: 'bg-gray-800 text-white',
		light: 'bg-gray-100 text-black',
		content: 'w-full text-center py-24 p-6 lg:px-24',
		btnContact:
			'bg-neutral-500 hover:bg-neutral-600 text-white text-sm sm:text-md lg:text-lg font-bold py-4 px-12 sm:px-16 lg:px-20 rounded-3xl uppercase tracking-widest',
		flexColToRow: 'flex flex-col justify-content space-x-0 sm:flex-row sm:space-y-0',
		btnWA: 'bg-green-400 hover:bg-green-500 w-full p-4 rounded text-white text-xl font-bold'
	};
</script>

<div id="banner" class="{tailwindCls.container} {tailwindCls.dark}">
	<div class="{tailwindCls.content} space-y-6">
		<div class="w-full flex justify-center">
			<img class="sm:px-20 lg:w-[1000px]" alt="Bizhub 52x" src={logo} />
		</div>
		<div class="text-2xl w-full lg:text-4xl tracking-widest px-6">
			<p class="italic">Investasi Terbaik 2024</p>
			<p>Gudang Industri IKN</p>
		</div>
		<p class="text-center text-md lg:text-lg sm:px-12 sm:py-6">
			Selamat datang di THE FIRST INDUSTRIAL & COMMERCIAL ESTATE terbesar dan terlengkap di gerbang
			Ibu Kota Nusantara. Setelah sukses membangun dan mengelola kawasan pergudangan selama 12
			tahun, Developer BIZHUB 52 kembali merilis tahap 3 BIZHUB 52X. Kawasan pergudangan ini
			menawarkan luas area 30 HA di kota Balikpapan.
		</p>
		<button class={tailwindCls.btnContact}>
			<a href="#contact-else">Brosur & Price List</a>
		</button>
	</div>
</div>

<div
	id="selling-points"
	class="{tailwindCls.container} {tailwindCls.dark} bg-blend-overlay bg-cover"
	style="background-image: url({imgPintuTol})"
>
	<div class="{tailwindCls.content} {tailwindCls.flexColToRow} space-y-20 sm:space-x-12">
		{#each selling_points as selling_point}
			<div class="w-full space-y-6">
				<h3 class="text-md sm:text-lg lg:text-xl text-yellow-300 font-bold">{selling_point.title}</h3>
				<p class="text-6xl sm:text-7xl lg:text-8xl text-yellow-300 font-bold">{selling_point.value}</p>
				<p class="text-wrap text-xl lg:text-3xl text-white font-bold italic">
					{selling_point.description}
				</p>
			</div>
		{/each}
	</div>
</div>

<div id="locations" class="{tailwindCls.container} {tailwindCls.dark}">
	<div class="{tailwindCls.content} space-y-12">
		<h2 class="text-5xl sm:text-6xl tracking-wide font-bold">Prime Location</h2>
		<ul class="{tailwindCls.flexColToRow} space-y-20 sm:space-x-10">
			{#each locations as location}
				<li class="space-y-6">
					<p class="uppercase text-lg tracking-widest sm:leading-[2.5ex] sm:h-[7.5ex] lg:text-2xl">
						{location.name}
					</p>
					<p class="text-3xl font-bold text-yellow-300">{location.distance}</p>
					<img
						class="w-[100vw] rounded-3xl object-cover relative aspect-[5/3] sm:aspect-[4/3]"
						src={location.image}
						alt={location.name}
					/>
				</li>
			{/each}
		</ul>
		<button class={tailwindCls.btnContact}>
			<a href="#contact-else">Brosur & Price List</a>
		</button>
	</div>
</div>

<div
	id="specs"
	class="{tailwindCls.container} {tailwindCls.dark} bg-blend-overlay bg-cover"
	style="background-image: url({imgAirport})"
>
	<div class="{tailwindCls.content}">
		<ul class="sm:space-y-2">
			{#each specs as spec}
				<li class="text-2xl sm:text-4xl font-bold text-yellow-300 tracking-widest">{spec.description}</li>
			{/each}
		</ul>
	</div>
</div>

<div id="descriptions" class="{tailwindCls.container} {tailwindCls.dark}">
	<div class="{tailwindCls.content} space-y-12">
		<div class="space-y-6 sm:space-y-12">
			<h2 class="text-5xl sm:text-6xl text-yellow-300 font-bold">{descriptions.title}</h2>
			<p class="text-md lg:text-xl sm:px-24">{descriptions.description}</p>
		</div>
		<ul class="{tailwindCls.flexColToRow} space-y-12 sm:space-x-10 lg:space-x-20 sm:p-6">
			{#each descriptions.details as detail}
				<li class="space-y-4 sm:space-y-0">
					<h3 class="font-bold uppercase">{detail.title}</h3>
					<p class="text-md sm:text-justify">{detail.description}</p>
				</li>
			{/each}
		</ul>
		<button class={tailwindCls.btnContact}>
			<a href="#contact-else">Brosur & Price List</a>
		</button>
	</div>
</div>

<div id="contact-else" class="{tailwindCls.container} {tailwindCls.light}">
	<div class="{tailwindCls.content} space-y-12 flex flex-col">
		<h2 class="text-4xl">Hubungi Kami</h2>
		<p class="sm:px-24 lg:px-48">
			Segera Hubungi Kami Untuk Informasi Lebih Lanjut. Jangan Sampai Kesempatan Terbaik ini
			Terlewatkan.
		</p>
		<form class="p-6 w-full space-y-12 lg:p-24">
			<div class="space-y-2">
				<input
					class="w-full p-3"
					type="text"
					id="name"
					name="name"
					placeholder="Nama Anda"
					required
				/>
				<input
					class="w-full p-3"
					type="text"
					id="whatsapp"
					name="whatsapp"
					placeholder="No Whatsapp Anda"
					required
				/>
			</div>
			<button class={tailwindCls.btnWA} type="submit">
				<a href="https://wa.me/6285225676801?text=halo" target="_blank">Kirim</a>
			</button>
		</form>
	</div>
</div>
