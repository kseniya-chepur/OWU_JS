<template>
    <div>
       <img :src="src1" class="first"/>
        <p>
            A wildlife photographer has captured the moment a lion cub bellowed its first roar, reminiscent of a famous scene in the Disney movie "The Lion King."
        </p>
        <p>
            Paul Mahagi snapped the incredible image while hiding in the bushes at Serengeti National Park, news agency SWNS reports.
        </p>
        <img :src="src2" class="second"/>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {            
        src1: 'https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/12/1024/512/lion-king-photo-2.jpg?ve=1&tl=1',
        src2: 'https://media-exp1.licdn.com/dms/image/C5603AQFvC80PF_TBLw/profile-displayphoto-shrink_200_200/0?e=1604534400&v=beta&t=XAU98TxGpOrz5TQmVtNMVCnJ0YlBait9XFawWtPy3Qc'
        }
    }
} 

</script>

<style scoped>
.first {
    width: 700px;
    margin: 30px 0;
}
.second {
    width: 120px; 
    position: absolute; 
    top: 5px; 
    left: 20px;
}
</style>


