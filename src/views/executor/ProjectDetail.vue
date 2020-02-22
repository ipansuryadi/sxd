<!-- =========================================================================================
    File Name: KnowledgeBaseCategoryQuestion.vue
    Description: Knowledge Base Question - Answer Article
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <div id="knowledge-base-article">
        <div class="vx-row">
            <div class="vx-col w-full md:w-2/5 lg:w-1/4">
                <vx-card>
                    <ul class="bordered-items">
                        <li v-for="que in relatedQuestions" :key="que.id" class="py-2" style="font-size:20px"><router-link :to="que.answerUrl">{{ que.question }}</router-link></li>
                    </ul>
                </vx-card>
            </div>
            <div class="vx-col w-full md:w-3/5 lg:w-3/4 mt-12 md:mt-0">
                <vx-card>
                    <div class="article-title mb-3">
                        <h1>Project IKEA</h1>
                        <p class="text-small">Current Stage : Operation &amp; Product > Pitching > Brief</p>
                        <p class="text-small">Job No : XA/BSE/19/08/001</p>
                        <p class="text-small">Due Date : 20 Oktober 2019</p>
                    </div>
                    <vs-divider class="m-1 mb-3"></vs-divider>
                    <h2>Info</h2>
                    <br/>
                    <p>Pastry jelly chocolate bar caramels fruitcake gummies marshmallow lemon drops. Powder cupcake topping muffin carrot cake croissant soufflé sugar plum sweet roll. Cotton candy ice cream gummies biscuit bonbon biscuit. Icing pastry bonbon. Sweet roll chocolate cake liquorice jelly beans caramels jelly cookie caramels. Pastry candy canes cake powder lollipop tootsie roll sugar plum. Cake cotton candy dragée danish. Muffin croissant sweet roll candy wafer marzipan cheesecake. Carrot cake toffee gummi bears gingerbread donut biscuit. Donut chupa chups oat cake cheesecake apple pie gummies marzipan icing cake. Macaroon jelly beans gummi bears carrot cake tiramisu liquorice. Sweet tootsie roll cookie marzipan brownie icing cookie jelly tart. Lollipop cookie tootsie roll candy canes.</p>
                    <img :src="require(`@/assets/images/pages/${article.img}`)" alt="article-img" class="responsive my-3 rounded" />
                    <p class="mb-6">Candy canes oat cake biscuit halvah ice cream. Marshmallow icing topping toffee caramels dessert carrot cake. Liquorice soufflé brownie sugar plum dessert cotton candy. Cupcake halvah topping oat cake soufflé pastry dragée pudding cotton candy.</p>
                    <vs-divider class="m-1 mb-3"></vs-divider>
                    <h2>Team</h2>
                    <br/>
                    <ul class="faq-supporters mt-4">
                        <li v-for="supporter in supporters" :key="supporter.id" class="mt-4">
                            <div class="flex items-center">
                                <vs-avatar class="mr-3" :src="require(`@/assets/images/portrait/small/${supporter.img}`)" size="35px" />
                                <div class="leading-tight">
                                    <p class="font-semibold">{{ supporter.name }}</p>
                                    <small>{{ supporter.profession }}</small>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <vs-divider class="m-1 mb-3"></vs-divider>
                    <h2>Job List</h2>
                    <br/>
                    <vs-divider class="m-1 mb-3"></vs-divider>
                    <h2>Report</h2>
                    
                </vx-card>
            </div>
        </div>
    </div>
</template>

<script>

export default{
    data() {
        return {
            article: {
                title: 'Dessert halvah carrot cake sweet?',
                lastUpdated: 'Mon Dec 10 2018 07:45:55 GMT+0000 (GMT)',
                img: 'kb-article.jpg',
                topics: ['Pastry jelly chocolate bar caramels', 'Donut chupa chups oat cake', 'Marshmallow icing topping toffee caramels dessert carrot cake']
            },
            supporters: [
                {
                    id: 1,
                    img: 'avatar-s-1.png',
                    name: 'Boyce Shene',
                    profession: 'Team Leader'
                },
                {
                    id: 2,
                    img: 'avatar-s-2.png',
                    name: 'Margie Sevy',
                    profession: 'Role 2'
                },
                {
                    id: 3,
                    img: 'avatar-s-3.png',
                    name: 'Cyndi Navas',
                    profession: 'Role 3'
                },
                {
                    id: 4,
                    img: 'avatar-s-4.png',
                    name: 'Chi Petrusky',
                    profession: 'Role 4'
                },
                {
                    id: 5,
                    img: 'avatar-s-5.png',
                    name: 'Shanel Dumag',
                    profession: 'Role 5'
                },
            ],
            relatedQuestions: [
                {
                    "id": 0,
                    "question": 'Info',
                    "answerUrl": "/pages/knowledge-base/category/question"
                },
                {
                    "id": 1,
                    "question": 'Team',
                    "answerUrl": "/pages/knowledge-base/category/question"
                },
                {
                    "id": 2,
                    "question": 'Job List',
                    "answerUrl": "/pages/knowledge-base/category/question"
                },
                {
                    "id": 3,
                    "question": 'Report',
                    "answerUrl": "/pages/knowledge-base/category/question"
                }
            ]
        }
    },
    computed: {},
    methods: {},
    components: {},
    mounted() {
        this.$emit('changeRouteTitle', 'Question');
    }
}
</script>