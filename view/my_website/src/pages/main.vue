<script>
import { useRouter } from 'vue-router'

export default { 
    setup() { 
        const router = useRouter() 

        return {
            router 
        }
    }
}
</script>


<template> 
    <div class='calling_card'>
        <p class='main_tag'>Developer &#183; Designer &#183; Data Analyst</p>

        <p>
            I am a young developer passionate about creating great user experiences using the best software engineering practices. 
            My favorite type of work is using my developement skills to create tools, pipelines or other functionality for users.
        </p>
    </div>


</template> 

<style>
    .calling_card { 
        max-width: 600px;  
        
    }

    .main_tag { 
        margin: 0; 
    }
</style>