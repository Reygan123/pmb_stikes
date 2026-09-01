<script setup lang="ts">
import { useRouter } from 'vue-router';

const props = defineProps({
    id: Number,
    image: String,
    slug: String,
    title: String
})

const router = useRouter()

const navigateToDetailProdi = () => {
    router.push(`/prodi/${props.slug}`)
}
</script>

<template>
    <div data-aos="fade-up" data-aos-duration="1000" @click="navigateToDetailProdi"
        class="w-full h-[280px] rounded-4xl shadow-lg group p-4 flex flex-col justify-between items-end relative cursor-pointer">
        <div class="w-fit ml-auto">
            <h4 class="text-base md:text-lg lg:text-[22px]">{{ id }}</h4>
        </div>
        <div class="w-full space-y-6 group">
            <div
                class="w-16 h-16 bg-[#E8E8E8] group-hover:bg-gstart transition-all duration-500 rounded-full flex justify-center items-center text-[#081B36] group-hover:text-primary">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <g clip-path="url(#clip0_16440_6419)">
                            <mask id="mask0_16440_6419" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0"
                                y="0" width="32" height="32">
                                <path d="M32 0H0V32H32V0Z" fill="white" />
                            </mask>
                            <g mask="url(#mask0_16440_6419)">
                                <path
                                    d="M8.00003 6.89379L5.37336 8.61379C2.80003 10.2938 2.80003 14.0538 5.37336 15.7338L13.4 20.9738C14.84 21.9204 17.2133 21.9204 18.6533 20.9738L26.64 15.7338C29.2 14.0538 29.2 10.3071 26.64 8.62712L18.6533 3.38712C17.2133 2.44046 14.84 2.44046 13.4 3.38712"
                                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path
                                    d="M7.50747 17.4402L7.49414 23.6935C7.49414 25.3869 8.80081 27.2002 10.4008 27.7335L14.6541 29.1469C15.3874 29.3869 16.6008 29.3869 17.3474 29.1469L21.6008 27.7335C23.2008 27.2002 24.5074 25.3869 24.5074 23.6935V17.5069"
                                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M28.5332 20V12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_16440_6419">
                                <rect width="32" height="32" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
            <h4 class="text-gstart font-medium text-xl">{{ title }}</h4>
        </div>
    </div>
</template>