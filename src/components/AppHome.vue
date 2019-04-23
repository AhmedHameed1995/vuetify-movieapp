<template>
    <div>
        <app-toolbar></app-toolbar>
        <div class="content_area">
            <app-contentarea></app-contentarea>
        </div>
        <div class="foot">
            <app-footer></app-footer>
        </div>
    </div>
</template>

<script>
import AppToolbar from './AppToolbar'
import AppDropdown from './AppDropdown'
import AppContentarea from './AppContentarea'
import AppFooter from './AppFooter'
export default {
    components:{AppFooter,AppToolbar,AppDropdown,AppContentarea}
}
</script>
