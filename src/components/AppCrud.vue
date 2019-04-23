<template>
    <div>
        <app-toolbar></app-toolbar>
        <div class="content_area">
        </div>
        <div class="foot">
            <app-footer></app-footer>
        </div>
    </div>
</template>

<script>
import AppToolbar from './AppToolbar'
import AppDropdown from './AppDropdown'
import AppFooter from './AppFooter'
export default {
    components:{AppFooter,AppToolbar,AppDropdown}
}
</script>
