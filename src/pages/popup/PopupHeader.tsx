import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    header: {
        color: '#fff',
        display: 'flex',
        height: '40px',
        lineHeight: '40px',
        justifyContent: 'space-between',
        borderBottom: '1px solid #404040',
        padding: '0 20px',
    },
    logo: {
        fontSize: '22px',
    },
    setting: {
        alignItems: 'center',
        display: 'flex',
    },
})

export function PopupHeader() {
    const styles = useStyles()

    // todo change setting icon
    return (
        <div className={styles.header}>
            <div className={styles.logo}>Reader</div>
            <div
                className={styles.setting}
                onClick={() => {
                    // TODO: open setting page
                }}
            >
                <svg width="20" height="20" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5471 3.22138H14.5471V3.17151L14.5422 3.12188L13.5471 3.22138ZM13.4207 2.49994L14.3297 2.08321L14.3297 2.08321L13.4207 2.49994ZM13.5471 3.22139H12.5471V3.27127L12.5521 3.3209L13.5471 3.22139ZM13.791 4.50565L14.6254 3.9545L14.6254 3.9545L13.791 4.50565ZM14.8257 4.93424L14.6254 3.9545L14.8257 4.93424ZM15.9063 4.19859L15.273 3.42463V3.42463L15.9063 4.19859ZM16.5058 3.77786L16.1577 2.84041V2.84041L16.5058 3.77786ZM17.2936 3.81715L17.7333 2.91899L17.7332 2.91899L17.2936 3.81715ZM17.8483 4.29545L17.1412 5.00255V5.00255L17.8483 4.29545ZM18.7045 5.15169L17.9974 5.85879V5.85879L18.7045 5.15169ZM19.1828 5.70638L20.081 5.26673V5.26673L19.1828 5.70638ZM19.2221 6.49415L18.2846 6.14604V6.14604L19.2221 6.49415ZM18.8014 7.09369L18.0274 6.46045L18.0049 6.48796L17.9844 6.517L18.8014 7.09369ZM18.8013 7.09371L19.5753 7.72695L19.5978 7.69944L19.6183 7.67039L18.8013 7.09371ZM18.0657 8.17428L19.0454 8.37456L19.0454 8.37456L18.0657 8.17428ZM18.4943 9.20896L17.9431 10.0434L17.9431 10.0434L18.4943 9.20896ZM19.7786 9.45287L19.6791 10.4479H19.6791L19.7786 9.45287ZM20.5001 9.5793L20.9168 8.67028V8.67028L20.5001 9.5793ZM21.0293 10.1641L20.0833 10.4883V10.4883L21.0293 10.1641ZM21.0293 12.8358L20.0833 12.5117L20.0833 12.5117L21.0293 12.8358ZM20.5 13.4207L20.0833 12.5117V12.5117L20.5 13.4207ZM19.7787 13.5471L19.8782 14.5422L19.7787 13.5471ZM18.4948 13.7909L17.9438 12.9564L17.9438 12.9564L18.4948 13.7909ZM18.0661 14.8259L17.0864 15.0264V15.0264L18.0661 14.8259ZM18.8015 15.906L18.0275 16.5393L18.0591 16.5779L18.0944 16.6131L18.8015 15.906ZM18.8015 15.906L19.6015 15.306L19.5589 15.2492L19.5086 15.1989L18.8015 15.906ZM18.8015 15.906L18.0015 16.5061L18.0142 16.5229L18.0276 16.5393L18.8015 15.906ZM19.2221 16.5053L18.2847 16.8535L18.2847 16.8535L19.2221 16.5053ZM19.1828 17.2933L18.2847 16.8535L19.1828 17.2933ZM18.7047 17.8478L17.9976 17.1407V17.1407L18.7047 17.8478ZM17.2936 19.1824L16.854 18.2843H16.854L17.2936 19.1824ZM16.5058 19.2217L16.1577 20.1592L16.1577 20.1592L16.5058 19.2217ZM15.9063 18.801L16.5396 18.027L16.5396 18.027L15.9063 18.801ZM14.8258 18.0653L14.6255 19.0451H14.6255L14.8258 18.0653ZM13.7911 18.4939L12.9567 17.9428L12.9567 17.9428L13.7911 18.4939ZM13.5471 19.7784L12.5521 19.6789V19.6789L13.5471 19.7784ZM13.4206 20.5002L12.5117 20.0833L12.5117 20.0833L13.4206 20.5002ZM12.836 21.0293L12.5117 20.0833H12.5117L12.836 21.0293ZM10.1641 21.0293L10.4883 20.0833L10.4883 20.0833L10.1641 21.0293ZM9.57928 20.5001L10.4883 20.0833L10.4883 20.0833L9.57928 20.5001ZM9.45285 19.7786L10.4479 19.6791V19.6791L9.45285 19.7786ZM9.20894 18.4943L8.37455 19.0455H8.37455L9.20894 18.4943ZM8.17428 18.0657L8.37454 19.0455H8.37455L8.17428 18.0657ZM7.09364 18.8014L6.46041 18.0275H6.46041L7.09364 18.8014ZM6.49407 19.2222L6.84216 20.1596H6.84216L6.49407 19.2222ZM5.70634 19.1829L6.14598 18.2847L6.14598 18.2847L5.70634 19.1829ZM5.15161 18.7046L5.85872 17.9974L5.85872 17.9974L5.15161 18.7046ZM4.2954 17.8483L5.00251 17.1412L4.98173 17.1205L4.95976 17.1009L4.2954 17.8483ZM4.29539 17.8483L3.58828 18.5554L3.60906 18.5762L3.63103 18.5957L4.29539 17.8483ZM3.81708 17.2936L4.71525 16.854V16.854L3.81708 17.2936ZM3.77779 16.5059L2.84034 16.1578L2.84034 16.1578L3.77779 16.5059ZM4.19855 15.9063L3.43029 15.2661L3.42459 15.2731L4.19855 15.9063ZM4.19855 15.9063L4.96681 16.5465L4.97251 16.5395L4.19855 15.9063ZM4.93422 14.8257L5.91395 15.026L5.91395 15.026L4.93422 14.8257ZM4.50563 13.791L5.05679 12.9566L5.05679 12.9566L4.50563 13.791ZM3.22136 13.5471L3.32087 12.5521L3.27124 12.5471H3.22136V13.5471ZM3.22135 13.5471L3.12185 14.5422L3.17147 14.5471H3.22135V13.5471ZM2.49993 13.4207L2.0832 14.3297L2.0832 14.3297L2.49993 13.4207ZM1.97067 12.8359L1.02469 13.1601L1.02469 13.1601L1.97067 12.8359ZM1.91666 12.1055H2.91666H1.91666ZM1.91666 10.8947H2.91666H1.91666ZM1.9707 10.164L1.02475 9.83973L1.9707 10.164ZM2.49984 9.57933L2.08303 8.67034L2.08302 8.67034L2.49984 9.57933ZM3.22148 9.45286L3.32098 10.4479H3.32098L3.22148 9.45286ZM4.50611 9.20886L5.05738 10.0432L5.05738 10.0432L4.50611 9.20886ZM4.9346 8.17438L5.91437 7.97423L4.9346 8.17438ZM4.19871 7.09342L4.97267 6.46018H4.97267L4.19871 7.09342ZM3.77779 6.49358L4.7153 6.14561L4.7153 6.14561L3.77779 6.49358ZM3.81707 5.70608L2.91884 5.26654L2.91884 5.26654L3.81707 5.70608ZM5.15166 4.29503L5.85876 5.00214L5.85876 5.00214L5.15166 4.29503ZM5.70638 3.81671L6.14603 4.71488V4.71488L5.70638 3.81671ZM6.49412 3.77742L6.14603 4.71488L6.14603 4.71488L6.49412 3.77742ZM7.09376 4.19823L7.73397 3.42998L7.72699 3.42428L7.09376 4.19823ZM7.09376 4.19824L6.45355 4.96649L6.46052 4.97219L7.09376 4.19824ZM8.17416 4.93383L8.37459 3.95413H8.37459L8.17416 4.93383ZM9.20907 4.50516L10.0436 5.05619L10.0436 5.05619L9.20907 4.50516ZM9.45286 3.22126L10.4479 3.32077L10.4529 3.27114V3.22126H9.45286ZM9.45286 3.22126L8.45783 3.12175L8.45286 3.17138V3.22126H9.45286ZM9.57924 2.50003L8.67017 2.08339L8.67016 2.0834L9.57924 2.50003ZM10.1642 1.97065L9.84008 1.02464V1.02464L10.1642 1.97065ZM12.8359 1.97069L13.1601 1.0247V1.0247L12.8359 1.97069ZM14.5422 3.12188C14.5121 2.8209 14.4859 2.42378 14.3297 2.08321L12.5117 2.91667C12.4933 2.87651 12.497 2.86256 12.5082 2.93252C12.5207 3.01081 12.5319 3.11933 12.5521 3.32089L14.5422 3.12188ZM14.5471 3.22139V3.22138H12.5471V3.22139H14.5471ZM14.6254 3.9545C14.6761 4.03117 14.6602 4.06032 14.6308 3.88801C14.603 3.7247 14.5796 3.49599 14.5422 3.12189L12.5521 3.3209C12.5866 3.66564 12.617 3.97606 12.6592 4.22368C12.6998 4.46228 12.7699 4.77414 12.9566 5.0568L14.6254 3.9545ZM14.6254 3.9545L14.6254 3.9545L12.9566 5.0568C13.4067 5.73823 14.2259 6.07755 15.026 5.91397L14.6254 3.9545ZM15.273 3.42463C14.9821 3.66271 14.8038 3.80785 14.6686 3.90367C14.526 4.00477 14.5354 3.97291 14.6254 3.9545L15.026 5.91397C15.3579 5.84612 15.628 5.67517 15.8254 5.53517C16.0303 5.38989 16.2714 5.19194 16.5395 4.97255L15.273 3.42463ZM16.1577 2.84041C15.8065 2.97082 15.5071 3.2331 15.273 3.42463L16.5395 4.97255C16.6963 4.84428 16.781 4.7755 16.8452 4.72898C16.9025 4.6874 16.8953 4.69993 16.8539 4.71531L16.1577 2.84041ZM17.7332 2.91899C17.241 2.67803 16.6715 2.64962 16.1577 2.84041L16.8539 4.71531H16.8539L17.7332 2.91899ZM18.5554 3.58834C18.3415 3.37446 18.0697 3.08371 17.7333 2.91899L16.8539 4.71531C16.8142 4.69589 16.8083 4.6827 16.8613 4.72978C16.9205 4.78246 16.9979 4.85932 17.1412 5.00255L18.5554 3.58834ZM19.4116 4.44458L18.5554 3.58834L17.1412 5.00255L17.9974 5.85879L19.4116 4.44458ZM20.081 5.26673C19.9163 4.93023 19.6255 4.65846 19.4116 4.44458L17.9974 5.85879C18.1406 6.00203 18.2175 6.07945 18.2702 6.1387C18.3173 6.19164 18.3041 6.18572 18.2846 6.14604L20.081 5.26673ZM20.1596 6.84226C20.3503 6.32849 20.3219 5.75895 20.081 5.26673L18.2846 6.14604L18.2846 6.14604L20.1596 6.84226ZM19.5753 7.72692C19.7669 7.49282 20.0291 7.19347 20.1596 6.84225L18.2846 6.14604C18.3 6.10463 18.3126 6.09743 18.271 6.15479C18.2245 6.21898 18.1557 6.30367 18.0274 6.46045L19.5753 7.72692ZM19.6183 7.67039L19.6183 7.67037L17.9844 6.517L17.9844 6.51703L19.6183 7.67039ZM19.0454 8.37456C19.027 8.46458 18.9952 8.47395 19.0963 8.33136C19.1921 8.19623 19.3372 8.01793 19.5753 7.72695L18.0274 6.46047C17.808 6.72862 17.61 6.96967 17.4648 7.17457C17.3248 7.37201 17.1538 7.6421 17.086 7.97401L19.0454 8.37456ZM19.0454 8.37456H19.0454L17.086 7.974C16.9224 8.77409 17.2617 9.59326 17.9431 10.0434L19.0454 8.37456ZM19.8781 8.45783C19.504 8.42042 19.2753 8.39697 19.1119 8.36917C18.9396 8.33983 18.9688 8.32392 19.0454 8.37456L17.9431 10.0434C18.2258 10.2301 18.5377 10.3002 18.7763 10.3408C19.0239 10.383 19.3343 10.4134 19.6791 10.4479L19.8781 8.45783ZM20.9168 8.67028C20.5762 8.51414 20.1791 8.48793 19.8781 8.45783L19.6791 10.4479C19.8807 10.4681 19.9892 10.4793 20.0675 10.4918C20.1374 10.503 20.1235 10.5067 20.0833 10.4883L20.9168 8.67028ZM21.9753 9.83988C21.7976 9.32146 21.415 8.89866 20.9168 8.67028L20.0833 10.4883V10.4883L21.9753 9.83988ZM22.0833 10.8946C22.0833 10.5921 22.0968 10.1943 21.9753 9.83988L20.0833 10.4883C20.069 10.4465 20.0741 10.433 20.0783 10.5038C20.0829 10.5829 20.0833 10.692 20.0833 10.8946H22.0833ZM22.0833 12.1056V10.8946H20.0833V12.1056H22.0833ZM21.9753 13.16C22.0968 12.8056 22.0833 12.408 22.0833 12.1056H20.0833C20.0833 12.3081 20.0829 12.4171 20.0783 12.4963C20.0741 12.567 20.069 12.5535 20.0833 12.5117L21.9753 13.16ZM20.9166 14.3298C21.4149 14.1014 21.7977 13.6785 21.9753 13.1599L20.0833 12.5117L20.0833 12.5117L20.9166 14.3298ZM19.8782 14.5422C20.1791 14.5121 20.5761 14.4859 20.9166 14.3298L20.0833 12.5117C20.1235 12.4933 20.1374 12.497 20.0675 12.5082C19.9892 12.5207 19.8807 12.5319 19.6792 12.5521L19.8782 14.5422ZM19.0458 14.6254C18.9691 14.676 18.94 14.6601 19.1123 14.6308C19.2755 14.603 19.5042 14.5796 19.8782 14.5422L19.6792 12.5521C19.3345 12.5866 19.0242 12.617 18.7767 12.6592C18.5382 12.6998 18.2264 12.7698 17.9438 12.9564L19.0458 14.6254ZM19.0458 14.6254L17.9438 12.9564C17.2621 13.4065 16.9226 14.226 17.0864 15.0264L19.0458 14.6254ZM19.5755 15.2728C19.3375 14.9819 19.1924 14.8037 19.0966 14.6686C18.9955 14.5261 19.0274 14.5354 19.0458 14.6254L17.0864 15.0264C17.1543 15.3581 17.3252 15.6281 17.4651 15.8254C17.6104 16.0303 17.8082 16.2712 18.0275 16.5393L19.5755 15.2728ZM19.5086 15.1989L19.5086 15.1989L18.0944 16.6131L18.0944 16.6131L19.5086 15.1989ZM19.6015 15.306L19.6015 15.306L18.0015 16.506L18.0015 16.5061L19.6015 15.306ZM20.1595 16.1571C20.0291 15.806 19.7669 15.5068 19.5755 15.2728L18.0276 16.5393C18.1558 16.696 18.2245 16.7806 18.271 16.8448C18.3126 16.9021 18.3001 16.8949 18.2847 16.8535L20.1595 16.1571ZM20.0809 17.7331C20.322 17.2407 20.3504 16.671 20.1595 16.1571L18.2847 16.8535V16.8535L20.0809 17.7331ZM19.4118 18.5549C19.6256 18.3411 19.9162 18.0694 20.0809 17.7331L18.2847 16.8535C18.3041 16.8139 18.3173 16.808 18.2702 16.8609C18.2176 16.9201 18.1407 16.9975 17.9976 17.1407L19.4118 18.5549ZM18.5554 19.4112L19.4118 18.5549L17.9976 17.1407L17.1412 17.997L18.5554 19.4112ZM17.7333 20.0806C18.0698 19.9159 18.3415 19.6251 18.5554 19.4112L17.1412 17.997C16.998 18.1403 16.9205 18.2171 16.8613 18.2698C16.8084 18.3169 16.8143 18.3037 16.854 18.2843L17.7333 20.0806ZM16.1577 20.1592C16.6715 20.35 17.2411 20.3216 17.7333 20.0806L16.854 18.2843L16.854 18.2843L16.1577 20.1592ZM15.2731 19.575C15.5072 19.7665 15.8065 20.0288 16.1577 20.1592L16.854 18.2843C16.8954 18.2997 16.9026 18.3122 16.8452 18.2706C16.781 18.2241 16.6963 18.1553 16.5396 18.027L15.2731 19.575ZM14.6255 19.0451C14.5354 19.0267 14.5261 18.9948 14.6687 19.0959C14.8038 19.1917 14.9821 19.3369 15.2731 19.575L16.5396 18.027C16.2714 17.8076 16.0304 17.6097 15.8255 17.4644C15.628 17.3244 15.3579 17.1535 15.0261 17.0856L14.6255 19.0451ZM14.6255 19.0451L14.6255 19.0451L15.0261 17.0856C14.2259 16.922 13.4068 17.2614 12.9567 17.9428L14.6255 19.0451ZM14.5422 19.8779C14.5796 19.5037 14.6031 19.275 14.6309 19.1116C14.6602 18.9392 14.6761 18.9684 14.6255 19.0451L12.9567 17.9428C12.7699 18.2255 12.6998 18.5374 12.6592 18.776C12.6171 19.0236 12.5866 19.3341 12.5521 19.6789L14.5422 19.8779ZM14.3296 20.917C14.4859 20.5763 14.5121 20.179 14.5422 19.8779L12.5521 19.6789C12.5319 19.8805 12.5207 19.9891 12.5082 20.0675C12.497 20.1375 12.4932 20.1235 12.5117 20.0833L14.3296 20.917ZM13.1603 21.9752C13.6786 21.7975 14.1013 21.415 14.3296 20.917L12.5117 20.0833L13.1603 21.9752ZM12.1053 22.0833C12.4079 22.0833 12.8058 22.0968 13.1603 21.9752L12.5117 20.0833C12.5535 20.069 12.567 20.0741 12.4962 20.0783C12.4171 20.0829 12.3079 20.0833 12.1053 20.0833V22.0833ZM10.8946 22.0833H12.1053V20.0833H10.8946V22.0833ZM9.83986 21.9753C10.1943 22.0968 10.5921 22.0833 10.8946 22.0833V20.0833C10.692 20.0833 10.5829 20.0829 10.5037 20.0783C10.433 20.0742 10.4465 20.069 10.4883 20.0833L9.83986 21.9753ZM8.67026 20.9168C8.89864 21.415 9.32145 21.7976 9.83987 21.9753L10.4883 20.0833L10.4883 20.0833L8.67026 20.9168ZM8.45781 19.8781C8.48791 20.1791 8.51412 20.5762 8.67026 20.9168L10.4883 20.0833C10.5067 20.1235 10.503 20.1374 10.4918 20.0675C10.4793 19.9892 10.468 19.8807 10.4479 19.6791L8.45781 19.8781ZM8.37455 19.0455C8.3239 18.9688 8.33981 18.9396 8.36915 19.112C8.39696 19.2753 8.4204 19.504 8.45781 19.8781L10.4479 19.6791C10.4134 19.3343 10.3829 19.0239 10.3408 18.7763C10.3002 18.5377 10.2301 18.2258 10.0433 17.9431L8.37455 19.0455ZM8.37455 19.0455H8.37455L10.0433 17.9431C9.59323 17.2617 8.77409 16.9224 7.97401 17.086L8.37455 19.0455ZM7.72688 19.5754C8.01788 19.3373 8.19619 19.1921 8.33134 19.0963C8.47394 18.9952 8.46457 19.0271 8.37454 19.0455L7.97402 17.086C7.6421 17.1538 7.372 17.3248 7.17454 17.4648C6.96963 17.6101 6.72857 17.808 6.46041 18.0275L7.72688 19.5754ZM6.84216 20.1596C7.1934 20.0292 7.49276 19.7669 7.72688 19.5754L6.46041 18.0275C6.30362 18.1557 6.21893 18.2245 6.15473 18.271C6.09737 18.3126 6.10457 18.3001 6.14598 18.2847L6.84216 20.1596ZM5.26669 20.0811C5.75891 20.322 6.32842 20.3504 6.84216 20.1596L6.14599 18.2847H6.14598L5.26669 20.0811ZM4.44451 19.4117C4.6584 19.6256 4.93018 19.9163 5.2667 20.0811L6.14598 18.2847C6.18566 18.3041 6.19158 18.3173 6.13864 18.2702C6.07939 18.2176 6.00196 18.1407 5.85872 17.9974L4.44451 19.4117ZM3.58829 18.5554L4.44451 19.4117L5.85872 17.9974L5.00251 17.1412L3.58829 18.5554ZM3.63103 18.5957L3.63104 18.5957L4.95976 17.1009L4.95976 17.1009L3.63103 18.5957ZM2.91892 17.7333C3.08363 18.0698 3.3744 18.3416 3.58828 18.5554L5.0025 17.1412C4.85927 16.998 4.7824 16.9206 4.72972 16.8613C4.68264 16.8084 4.69583 16.8143 4.71525 16.854L2.91892 17.7333ZM2.84034 16.1578C2.64957 16.6715 2.67797 17.2411 2.91892 17.7333L4.71525 16.854L2.84034 16.1578ZM3.42459 15.2731C3.23304 15.5072 2.97076 15.8066 2.84034 16.1578L4.71525 16.854C4.69987 16.8954 4.68734 16.9026 4.72892 16.8452C4.77545 16.781 4.84423 16.6963 4.9725 16.5396L3.42459 15.2731ZM3.43033 15.2661L3.43033 15.2661L4.96677 16.5465L4.96677 16.5465L3.43033 15.2661ZM3.95448 14.6254C3.97288 14.5354 4.00475 14.5261 3.90364 14.6686C3.80783 14.8038 3.66267 14.9821 3.4246 15.2731L4.97251 16.5395C5.19191 16.2714 5.38987 16.0303 5.53515 15.8254C5.67514 15.628 5.8461 15.3579 5.91395 15.026L3.95448 14.6254ZM3.95448 14.6254L3.95448 14.6254L5.91395 15.026C6.07752 14.2259 5.7382 13.4067 5.05679 12.9566L3.95448 14.6254ZM3.12186 14.5422C3.49596 14.5796 3.72467 14.603 3.88798 14.6308C4.0603 14.6602 4.03115 14.6761 3.95448 14.6254L5.05679 12.9566C4.77412 12.7699 4.46226 12.6998 4.22365 12.6592C3.97604 12.617 3.66561 12.5866 3.32087 12.5521L3.12186 14.5422ZM3.22135 14.5471H3.22136V12.5471H3.22135V14.5471ZM2.0832 14.3297C2.42376 14.4859 2.82088 14.5121 3.12185 14.5422L3.32086 12.5521C3.11931 12.5319 3.01079 12.5207 2.93251 12.5082C2.86255 12.497 2.8765 12.4933 2.91665 12.5117L2.0832 14.3297ZM1.02469 13.1601C1.20237 13.6785 1.58501 14.1014 2.0832 14.3297L2.91666 12.5117L2.91666 12.5117L1.02469 13.1601ZM0.916656 12.1055C0.916656 12.4079 0.903222 12.8057 1.02469 13.1601L2.91666 12.5117C2.93098 12.5535 2.92584 12.567 2.92169 12.4963C2.91705 12.4171 2.91666 12.308 2.91666 12.1055H0.916656ZM0.916657 10.8947L0.916656 12.1055H2.91666L2.91666 10.8947H0.916657ZM1.02475 9.83973C0.903215 10.1942 0.916657 10.5921 0.916657 10.8947H2.91666C2.91666 10.692 2.91706 10.5829 2.9217 10.5038C2.92585 10.433 2.93099 10.4465 2.91666 10.4883L1.02475 9.83973ZM2.08302 8.67034C1.58498 8.89872 1.20243 9.32143 1.02475 9.83973L2.91666 10.4883L2.91666 10.4883L2.08302 8.67034ZM3.12198 8.45782C2.82092 8.48792 2.42368 8.51414 2.08303 8.67034L2.91665 10.4883C2.87649 10.5067 2.86253 10.503 2.93251 10.4918C3.01082 10.4793 3.11937 10.4681 3.32098 10.4479L3.12198 8.45782ZM3.95484 8.37453C4.03152 8.32386 4.06069 8.33978 3.88832 8.36913C3.72497 8.39695 3.49619 8.4204 3.12198 8.45782L3.32098 10.4479C3.66583 10.4134 3.97634 10.3829 4.22403 10.3408C4.46271 10.3001 4.77466 10.23 5.05738 10.0432L3.95484 8.37453ZM3.95484 8.37453L5.05738 10.0432C5.73856 9.5931 6.07778 8.77416 5.91437 7.97423L3.95484 8.37453ZM3.42476 7.72665C3.66292 8.01774 3.80813 8.19612 3.90398 8.33131C4.00512 8.47396 3.97324 8.46459 3.95484 8.37453L5.91437 7.97423C5.84654 7.64222 5.67554 7.37204 5.5355 7.17453C5.39017 6.96956 5.19215 6.72843 4.97267 6.46018L3.42476 7.72665ZM2.84029 6.84156C2.97071 7.19295 3.23312 7.49243 3.42476 7.72665L4.97267 6.46018C4.84434 6.30333 4.77552 6.21859 4.72897 6.15436C4.68738 6.09697 4.69992 6.10417 4.7153 6.14561L2.84029 6.84156ZM2.91884 5.26654C2.67805 5.75863 2.64965 6.32795 2.84029 6.84156L4.7153 6.14561V6.14561L2.91884 5.26654ZM3.58845 4.44402C3.37448 4.658 3.08358 4.92988 2.91884 5.26654L4.7153 6.14561C4.69587 6.1853 4.68268 6.19123 4.72977 6.13826C4.78248 6.07899 4.85937 6.00153 5.00267 5.85824L3.58845 4.44402ZM4.44455 3.58793L3.58845 4.44402L5.00267 5.85824L5.85876 5.00214L4.44455 3.58793ZM5.26674 2.91853C4.93022 3.08325 4.65844 3.37403 4.44455 3.58793L5.85876 5.00214C6.002 4.8589 6.07943 4.78203 6.13868 4.72935C6.19162 4.68227 6.1857 4.69546 6.14603 4.71488L5.26674 2.91853ZM6.84221 2.83996C6.32846 2.6492 5.75895 2.6776 5.26674 2.91853L6.14603 4.71488L6.84221 2.83996ZM7.72699 3.42428C7.49284 3.2327 7.19345 2.97038 6.84221 2.83996L6.14603 4.71488C6.1046 4.6995 6.0974 4.68696 6.15479 4.72856C6.219 4.7751 6.30371 4.84389 6.46052 4.97219L7.72699 3.42428ZM7.73394 3.43001L7.73394 3.43001L6.45357 4.96645L6.45358 4.96646L7.73394 3.43001ZM8.37459 3.95413C8.4646 3.97254 8.47396 4.0044 8.33136 3.90328C8.19624 3.80747 8.01794 3.66233 7.727 3.42428L6.46052 4.97219C6.72865 5.19157 6.96966 5.38949 7.17451 5.53475C7.3719 5.67472 7.64192 5.84566 7.97373 5.91354L8.37459 3.95413ZM8.37459 3.95413L8.37459 3.95413L7.97373 5.91354C8.77402 6.07727 9.59344 5.73785 10.0436 5.05619L8.37459 3.95413ZM8.45783 3.12176C8.42043 3.49574 8.39699 3.72439 8.3692 3.88765C8.33987 4.05992 8.32397 4.03078 8.37459 3.95413L10.0436 5.05619C10.2302 4.77359 10.3002 4.46182 10.3408 4.22328C10.383 3.97574 10.4134 3.66541 10.4479 3.32077L8.45783 3.12176ZM8.45286 3.22126V3.22126H10.4529V3.22126H8.45286ZM8.67016 2.0834C8.51412 2.42387 8.48791 2.82087 8.45783 3.12175L10.4479 3.32076C10.4681 3.11927 10.4793 3.01078 10.4918 2.93252C10.5029 2.86258 10.5067 2.87652 10.4883 2.91667L8.67016 2.0834ZM9.84008 1.02464C9.32149 1.20231 8.89856 1.58506 8.67017 2.08339L10.4883 2.91667L10.4883 2.91667L9.84008 1.02464ZM10.8944 0.916672C10.592 0.916672 10.1944 0.903245 9.84008 1.02464L10.4883 2.91667C10.4465 2.93099 10.433 2.92585 10.5037 2.92171C10.5829 2.91707 10.6919 2.91667 10.8944 2.91667V0.916672ZM12.1054 0.916672H10.8944V2.91667H12.1054V0.916672ZM13.1601 1.0247C12.8057 0.903237 12.4079 0.916672 12.1054 0.916672V2.91667C12.308 2.91667 12.4171 2.91707 12.4962 2.92171C12.567 2.92586 12.5535 2.93099 12.5117 2.91667L13.1601 1.0247ZM14.3297 2.08321C14.1013 1.58502 13.6785 1.20238 13.1601 1.0247L12.5117 2.91667V2.91667L14.3297 2.08321ZM14.3333 11.5C14.3333 13.0648 13.0648 14.3333 11.5 14.3333V16.3333C14.1694 16.3333 16.3333 14.1694 16.3333 11.5H14.3333ZM11.5 8.66667C13.0648 8.66667 14.3333 9.9352 14.3333 11.5H16.3333C16.3333 8.83063 14.1694 6.66667 11.5 6.66667V8.66667ZM8.66665 11.5C8.66665 9.9352 9.93518 8.66667 11.5 8.66667V6.66667C8.83061 6.66667 6.66665 8.83063 6.66665 11.5H8.66665ZM11.5 14.3333C9.93518 14.3333 8.66665 13.0648 8.66665 11.5H6.66665C6.66665 14.1694 8.83061 16.3333 11.5 16.3333V14.3333Z" fill="#FCFCFC" />
                </svg>
            </div>
        </div>
    )
}
