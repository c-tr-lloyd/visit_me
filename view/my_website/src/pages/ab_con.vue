<template>
    <div class='structure'>
   
    <div class='about'> 
        <p>Lorem Ipsum</p>
    </div>

    <form class='con_form'>
        <span class='input-span'>
            <label for='name' class='label'>Name</label>
            <input type='text' name='name' id='name'/>
        </span>
        <span class='input-span'>
            <label for='email' class='label'>Email</label>
            <input type='email' name='email' id='email'/>
        </span>
        <span class='input-span'>
            <label for='message' class='label'>Message</label>
            <textarea name='message' id='message' rows='4' cols='50'></textarea>
        </span>
        <input class='submit' type='submit' value='Send Message'/> 
    </form>
    </div>
</template>


<style>
    .structure { 
        display: flex; 
        flex-direction: row; 
        justify-content: center; 
    }
    .con_form {
        --bg-light: #efefef; 
        --bg-dark: #707070; 
        --clr: #148f77; 
        --clr-alpha: #42424260; 
        display: flex; 
        flex-direction: column; 
        align-items: center; 
        gap: 1rem; 
        width: 100%; 
        max-width: 365px; 
        place-self: center; 
        margin: 3rem; 
        padding-left: 3rem; 
        border-left: solid #0e6251;
    }

    .con_form .input-span, .con_form .area-span { 
        width: 100%; 
        display: flex; 
        flex-direction: column; 
        gap: 0.5rem; 
    }


    .con_form input[type='email'],
    .con_form input[type='text'],
    textarea { 
        border-radius: 0.5rem; 
        padding: 1rem 0.75rem; 
        width: 100%; 
        border: none; 
        display: flex; 
        align-items: center; 
        gap: 0.5rem; 
        background-color: var(--clr-alpha); 
        outline: 2px solid var(--bg-dark); 
        resize: none; 
    } 


    .con_form input[type='email']:focus,
    .con_form input[type='text']:focus,
    textarea:focus {
        outline: 2px solid var(--clr); 
    }


    .label {
        align-self: flex-start; 
        color: var(--clr); 
        font-weight: 600; 
    }


    .con_form .submit { 
        padding: 0.75rem;
        margin: 0.5rem;  
        width: 100%; 
        display: flex; 
        align-items: center; 
        gap: 0.5rem; 
        border-radius: 3rem; 
        background-color: var(--bg-dark); 
        color: var(--bg-light); 
        border: none; 
        cursor: pointer; 
        transition: all 300ms; 
        font-weight: 600; 
        font-size: 0.9rem; 
    }


    .con_form .submit:hover { 
        background-color: var(--clr); 
        color: var(--bg-light); 
    }

    
    .span { 
        text-decoration: none; 
        color: var(--bg-dark); 
    }


    .span a { 
        color: var(--clr); 
    }


    .about {  
        width: 100%; 
        max-width: 365px; 
        padding-right: 3rem; 
        margin-top: 5rem;
        height: inherit; 
    }
</style>