<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
// import { useRouter } from 'vue-router';

// const router = useRouter()

const props = defineProps<{
    title: String,
    slug: String,
    description: String
    start: String
    end: String
    phone: String
}>()

const handleWhatsApp = () => {
    if (props.phone) {
        const message = encodeURIComponent(
            `Halo, saya ingin bertanya mengenai jalur ${props.title}`
        );
        window.location.href = `https://api.whatsapp.com/send?phone=${props.phone}&text=${message}`;
    } else {
        alert("Nomor WhatsApp admin tidak tersedia.");
    }
};

// const navigateToJalurDetail = () => {
//     router.push(`jalur/${props.slug}`)
// }

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' });
};
</script>

<template>
    <div class="w-full h-full p-2 rounded-3xl border border-[#E8E8E8] flex flex-col justify-between items-start gap-6">
        <div class="w-16 h-16 flex justify-center items-center bg-primary rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path
                    d="M15.9998 4.41374V16C15.9998 16.2652 15.8944 16.5196 15.7069 16.7071C15.5193 16.8946 15.265 17 14.9998 17C14.7345 17 14.4802 16.8946 14.2927 16.7071C14.1051 16.5196 13.9998 16.2652 13.9998 16V4.41374L11.7073 6.70749C11.6143 6.8004 11.504 6.8741 11.3827 6.92439C11.2613 6.97467 11.1312 7.00055 10.9998 7.00055C10.7344 7.00055 10.4799 6.89513 10.2923 6.70749C10.1993 6.61458 10.1256 6.50428 10.0754 6.38289C10.0251 6.2615 9.9992 6.13139 9.9992 5.99999C9.9992 5.73463 10.1046 5.48013 10.2923 5.29249L14.2923 1.29249C14.3851 1.19952 14.4954 1.12576 14.6168 1.07543C14.7382 1.02511 14.8683 0.999207 14.9998 0.999207C15.1312 0.999207 15.2613 1.02511 15.3827 1.07543C15.5041 1.12576 15.6144 1.19952 15.7073 1.29249L19.7073 5.29249C19.8949 5.48013 20.0003 5.73463 20.0003 5.99999C20.0003 6.26536 19.8949 6.51985 19.7073 6.70749C19.5196 6.89513 19.2651 7.00055 18.9998 7.00055C18.7344 7.00055 18.4799 6.89513 18.2923 6.70749L15.9998 4.41374ZM23.9998 15.4525V12C23.9998 11.4696 23.789 10.9609 23.414 10.5858C23.0389 10.2107 22.5302 9.99999 21.9998 9.99999H19.9998C19.7345 9.99999 19.4802 10.1054 19.2926 10.2929C19.1051 10.4804 18.9998 10.7348 18.9998 11C18.9998 11.2652 19.1051 11.5196 19.2926 11.7071C19.4802 11.8946 19.7345 12 19.9998 12H21.9998V22.05C21.4034 21.4408 20.6052 21.0702 19.755 21.0078C18.9048 20.9453 18.061 21.1953 17.3821 21.7109C16.7031 22.2264 16.2356 22.972 16.0674 23.8078C15.8992 24.6435 16.0419 25.5119 16.4685 26.25L16.4985 26.2975L19.281 30.5475C19.4262 30.7694 19.6536 30.9246 19.9133 30.9789C20.1729 31.0332 20.4434 30.9821 20.6654 30.8369C20.8873 30.6917 21.0425 30.4642 21.0968 30.2046C21.1511 29.945 21.1 29.6744 20.9548 29.4525L18.1885 25.2287C17.9924 24.8825 17.9419 24.4725 18.0481 24.089C18.1543 23.7055 18.4085 23.3798 18.7548 23.1837C19.101 22.9877 19.511 22.9371 19.8945 23.0433C20.278 23.1495 20.6037 23.4037 20.7998 23.75C20.8085 23.7662 20.8185 23.7825 20.8285 23.7975L22.1635 25.8362C22.2815 26.0162 22.4544 26.1533 22.6566 26.2272C22.8587 26.301 23.0793 26.3077 23.2855 26.2462C23.4917 26.1847 23.6726 26.0583 23.8013 25.8858C23.93 25.7134 23.9996 25.5039 23.9998 25.2887V18C24.9423 18.8725 25.6951 19.9298 26.2112 21.1059C26.7274 22.282 26.9958 23.5518 26.9998 24.8362V30C26.9998 30.2652 27.1051 30.5196 27.2927 30.7071C27.4802 30.8946 27.7345 31 27.9998 31C28.265 31 28.5193 30.8946 28.7069 30.7071C28.8944 30.5196 28.9998 30.2652 28.9998 30V24.8312C28.9941 22.9788 28.5356 21.1558 27.6641 19.5211C26.7926 17.8865 25.5346 16.4897 23.9998 15.4525ZM9.99976 9.99999H7.99976C7.46932 9.99999 6.96062 10.2107 6.58554 10.5858C6.21047 10.9609 5.99976 11.4696 5.99976 12V25C5.99976 25.2652 6.10511 25.5196 6.29265 25.7071C6.48019 25.8946 6.73454 26 6.99976 26C7.26497 26 7.51933 25.8946 7.70686 25.7071C7.8944 25.5196 7.99976 25.2652 7.99976 25V12H9.99976C10.265 12 10.5193 11.8946 10.7069 11.7071C10.8944 11.5196 10.9998 11.2652 10.9998 11C10.9998 10.7348 10.8944 10.4804 10.7069 10.2929C10.5193 10.1054 10.265 9.99999 9.99976 9.99999Z"
                    fill="white" />
            </svg>
        </div>

        <div class="w-full space-y-4">
            <div class="w-full space-y-2">
                <h2 class="text-lg lg:text-xl xl:text-2xl text-gstart font-medium">{{ title }}</h2>
                <p v-if="start && end" class="text-sm lg:text-base xl:text-lg font-light">
                    {{ formatDate(String(start)) }} - {{ formatDate(String(end)) }}
                </p>

                <p v-if="!start && !end" class="text-sm lg:text-base xl:text-lg font-light">
                    Belum Di Tentukan
                </p>
            </div>
            <div class="p-3 rounded-3xl bg-gray-200 space-y-3">
                <Button @click="handleWhatsApp" bg-color="bg-white" text-color="text-gstart" class="w-full"
                    text="Hubungi Kami" />
                <Button bg-color="bg-gray-100" text-color="text-gray-500" class="w-full" text="Coming Soon" />
            </div>
        </div>
    </div>
</template>
