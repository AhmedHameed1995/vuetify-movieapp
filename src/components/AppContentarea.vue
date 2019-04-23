<template>

    <v-layout row wrap>
        <app-dropdown></app-dropdown>
        <v-container grid-list-md>
            <v-layout row wrap>
            <v-flex d-flex xs12 sm3 md2>
                <v-card color="red darker-3" dark>
                <v-card-title primary class="title">Lorem</v-card-title>
                <v-card-text>{{ lorem }}</v-card-text>
                </v-card>
            </v-flex>
            <v-flex d-flex xs12 sm3 md2>
                <v-card color="purple" dark>
                <v-card-title primary class="title">Lorem</v-card-title>
                <v-card-text>{{ lorem }}</v-card-text>
                </v-card>
            </v-flex>
            <v-flex d-flex xs12 sm6 md3>
                <v-layout row wrap>
                <v-flex d-flex>
                    <v-card color="indigo" dark>
                    <v-card-text>{{ lorem.slice(0, 70) }}</v-card-text>
                    </v-card>
                </v-flex>
                <v-flex d-flex>
                    <v-layout row wrap>
                    <v-flex
                        v-for="n in 2"
                        :key="n"
                        d-flex
                        xs12
                    >
                        <v-card
                        color="red lighten-2"
                        dark
                        >
                        <v-card-text>{{ lorem.slice(0, 40) }}</v-card-text>
                        </v-card>
                    </v-flex>
                    </v-layout>
                </v-flex>
                </v-layout>
            </v-flex>
            <v-flex d-flex xs12 sm6 md2 child-flex>
                <v-card color="green lighten-2" dark>
                <v-card-text>{{ lorem.slice(0, 90) }}</v-card-text>
                </v-card>
            </v-flex>
            <v-flex d-flex xs12 sm6 md3>
                <v-card color="blue lighten-2" dark>
                <v-card-text>{{ lorem.slice(0, 100) }}</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs12 sm12>
                
                <v-layout row wrap>
                    <v-flex
                    v-for="song in songs" :key="song.title"
                    xs3
                    d-flex
                    >
                    <v-card flat tile class="d-flex">
                        <v-img
                            :src="getPic(song.poster_path)"
                        class="grey lighten-2"
                        >
                        </v-img>
                    </v-card>
                    </v-flex>
                </v-layout>
            </v-flex>
            <!-- <v-flex d-flex xs12 sm12 md12 v-for="song in songs" :key="song.title">
                <v-card color="blue lighten-2" dark>
                    <v-card-text>
                        <div >
                            {{song.title}} - 
                            {{song.artist}} - 
                            {{song.album}} - 
                            
                        </div>
                    </v-card-text>
                </v-card>
            </v-flex> -->
            </v-layout>
        </v-container>
    </v-layout>

</template>


<script>
    import AppDropdown from './AppDropdown'
    export default {
        data() {
            return {
                lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
                songs: {}
            }
        },

        components:{AppDropdown},
        mounted () {
            //do a request in backend to fetch all data
           
        },
        methods : {
            // songs() {
            //     console.log('sad');
            // }
            getPic(index) {
                return 'https://image.tmdb.org/t/p/w500/' + index;
            },
            readData(){
                let self = this;
                let url = 'https://api.themoviedb.org/3/movie/popular?api_key=844dba0bfd8f3a4f3799f6130ef9e335&language=en-US&page=3';
                fetch(url)
                .then((resp) => resp.json()) // Transform the data into json
                .then(function(data) {
                    // Create and append the li's to the ul
                    console.log(data);
                    self.songs = data.results;
                    // this.songs = data.results;
                })
            }
        },
        created() {
            this.readData();
        }

    }
</script>