<script setup lang="ts">
import Title from '@/components/ui/Title.vue';

const data = [
    {
        "title": "Investasi Pendidikan",
        "description": "Biaya kompetitif dengan kualitas pendidikan terbaik",
        "icon": `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
  <g clip-path="url(#clip0_16386_8441)">
    <mask id="mask0_16386_8441" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64">
      <path d="M64 0H0V64H64V0Z" fill="white"/>
    </mask>
    <g mask="url(#mask0_16386_8441)">
      <path d="M28.9054 36.1072H24.9054C21.8387 36.1072 19.3587 33.5472 19.3587 30.3739C19.3587 29.2806 20.2654 28.3739 21.3587 28.3739C22.452 28.3739 23.3587 29.2806 23.3587 30.3739C23.3587 31.3339 24.052 32.1072 24.9054 32.1072H28.9054C29.5187 32.1072 29.9987 31.5472 29.9987 30.8539C29.9987 29.9206 29.8387 29.8672 29.2254 29.6539L22.7987 27.4139C20.4787 26.6139 19.332 24.9872 19.332 22.4539C19.332 19.5739 21.6254 17.2006 24.4254 17.2006H28.4254C31.492 17.2006 33.972 19.7606 33.972 22.9339C33.972 24.0272 33.0654 24.9339 31.972 24.9339C30.8787 24.9339 29.972 24.0272 29.972 22.9339C29.972 21.9739 29.2787 21.2006 28.4254 21.2006H24.4254C23.812 21.2006 23.332 21.7606 23.332 22.4539C23.332 23.3872 23.492 23.4406 24.1054 23.6539L30.532 25.8939C32.852 26.7206 33.972 28.3472 33.972 30.8539C33.9987 33.7606 31.7054 36.1072 28.9054 36.1072Z" fill="#F03C06"/>
      <path d="M26.6641 38.239C25.5707 38.239 24.6641 37.3323 24.6641 36.239V34.2656C24.6641 33.1723 25.5707 32.2656 26.6641 32.2656C27.7574 32.2656 28.6641 33.1723 28.6641 34.2656V36.239C28.6641 37.359 27.7574 38.239 26.6641 38.239Z" fill="#F03C06"/>
      <path d="M26.6641 21.1737C25.5707 21.1737 24.6641 20.2671 24.6641 19.1737V17.0938C24.6641 16.0004 25.5707 15.0938 26.6641 15.0938C27.7574 15.0938 28.6641 16.0004 28.6641 17.0938V19.1737C28.6641 20.2671 27.7574 21.1737 26.6641 21.1737Z" fill="#F03C06"/>
      <path d="M26.6387 49.9205C13.7854 49.9205 3.33203 39.4672 3.33203 26.6139C3.33203 13.7606 13.7854 3.30725 26.6387 3.30725C39.492 3.30725 49.9454 13.7606 49.9454 26.6139C49.9454 39.4672 39.4654 49.9205 26.6387 49.9205ZM26.6387 7.33392C15.9987 7.33392 7.33203 16.0006 7.33203 26.6406C7.33203 37.2805 15.9987 45.9205 26.6387 45.9205C37.2787 45.9205 45.9454 37.2538 45.9454 26.6139C45.9454 15.9739 37.2787 7.33392 26.6387 7.33392Z" fill="#F03C06"/>
      <path d="M45.3854 60.5874C40.4521 60.5874 35.8121 58.1874 32.9588 54.1341C32.3188 53.2274 32.5321 51.9741 33.4388 51.3341C34.3454 50.6941 35.5988 50.9074 36.2388 51.8141C38.3454 54.8007 41.7588 56.5608 45.3854 56.5608C51.5721 56.5608 56.5854 51.5474 56.5854 45.3608C56.5854 41.7607 54.8254 38.3474 51.8921 36.2408C50.9854 35.6008 50.7988 34.3474 51.4388 33.4408C52.0788 32.5341 53.3321 32.3474 54.2388 32.9874C58.2121 35.8408 60.5854 40.4541 60.5854 45.3608C60.5854 53.7874 53.7854 60.5874 45.3854 60.5874Z" fill="#F03C06"/>
    </g>
  </g>
  <defs>
    <clipPath id="clip0_16386_8441">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>`
    },
    {
        "title": "Fleksibel",
        "description": "Skema pembayaran yang dapat disesuaikan",
        "icon": `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
  <g clip-path="url(#clip0_16386_8456)">
    <mask id="mask0_16386_8456" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64">
      <path d="M64 0H0V64H64V0Z" fill="white"/>
    </mask>
    <g mask="url(#mask0_16386_8456)">
      <path d="M24.0013 50.6667C24.0013 52.6667 23.4413 54.56 22.4546 56.16C20.6146 59.2533 17.228 61.3333 13.3346 61.3333C9.4413 61.3333 6.05464 59.2533 4.21464 56.16C3.22797 54.56 2.66797 52.6667 2.66797 50.6667C2.66797 44.7733 7.4413 40 13.3346 40C19.228 40 24.0013 44.7733 24.0013 50.6667Z" stroke="#F03C06" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9.17969 50.6653L11.8197 53.3053L17.4997 48.052" stroke="#F03C06" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M47.3384 18.8C46.6984 18.6933 46.0317 18.6667 45.3384 18.6667H18.6717C17.9251 18.6667 17.2051 18.72 16.5117 18.8267C16.8851 18.08 17.4184 17.3867 18.0584 16.7467L26.725 8.05337C30.3784 4.42671 36.2984 4.42671 39.9517 8.05337L44.6184 12.7733C46.325 14.4533 47.2317 16.5866 47.3384 18.8Z" stroke="#F03C06" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M58.6693 32.0001V45.3334C58.6693 53.3334 53.3359 58.6667 45.3359 58.6667H20.3493C21.1759 57.9734 21.8959 57.1201 22.4559 56.1601C23.4426 54.5601 24.0026 52.6667 24.0026 50.6667C24.0026 44.7734 19.2293 40.0001 13.3359 40.0001C10.1359 40.0001 7.2826 41.4134 5.33594 43.6268V32.0001C5.33594 24.7467 9.70927 19.6801 16.5093 18.8267C17.2026 18.7201 17.9226 18.6667 18.6693 18.6667H45.3359C46.0293 18.6667 46.6959 18.6934 47.3359 18.8001C54.2159 19.6001 58.6693 24.6934 58.6693 32.0001Z" stroke="#F03C06" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M58.6693 33.3334H50.6693C47.7359 33.3334 45.3359 35.7334 45.3359 38.6667C45.3359 41.6 47.7359 44 50.6693 44H58.6693" stroke="#F03C06" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
  </g>
  <defs>
    <clipPath id="clip0_16386_8456">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>`
    },
    {
        "title": "Beasiswa",
        "description": "Program beasiswa untuk mahasiswa berprestasi",
        "icon": `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
  <g clip-path="url(#clip0_16386_8471)">
    <mask id="mask0_16386_8471" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64">
      <path d="M62.5 1.5V62.5H1.5V1.5H62.5Z" fill="white" stroke="white" stroke-width="3"/>
    </mask>
    <g mask="url(#mask0_16386_8471)">
      <path d="M16.0001 13.7875L10.7467 17.2275C5.60005 20.5875 5.60005 28.1074 10.7467 31.4674L26.8 41.9474C29.68 43.8408 34.4267 43.8408 37.3067 41.9474L53.28 31.4674C58.4 28.1074 58.4 20.6141 53.28 17.2541L37.3067 6.77413C34.4267 4.88079 29.68 4.88079 26.8 6.77413" stroke="#F03C06" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M15.0149 34.8802L14.9883 47.3869C14.9883 50.7736 17.6016 54.4002 20.8016 55.4669L29.3082 58.2936C30.7749 58.7736 33.2016 58.7736 34.6949 58.2936L43.2016 55.4669C46.4016 54.4002 49.0149 50.7736 49.0149 47.3869V35.0136" stroke="#F03C06" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M57.0664 40V24" stroke="#F03C06" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
  </g>
  <defs>
    <clipPath id="clip0_16386_8471">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>`
    }
]
</script>

<template>
    <section
        class="px-4 py-8 md:p-8 lg:py-16 lg:px-24 flex flex-col justify-center items-center text-center gap-8 md:gap-12 lg:gap-16">
        <Title title="Kenapa Memilih Universitas BTH" />
        <div class="grid grid-cols-1 md:grid-cols-3">
            <div v-for="(item, index) in data" :key="index"
                class="flex flex-col items-center gap-4 md:gap-6 lg:gap-10 px-10 border-l border-dashed border-netral first:border-transparent">
                <div v-html="item.icon"></div>
                <div class="space-y-3">
                    <h3 class="text-lg md:text-xl lg:text-2xl text-black font-medium">{{ item.title }}</h3>
                    <p class="text-base md:text-lg lg:text-xl text-gray-600">{{ item.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>