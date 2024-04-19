import 'dotenv/config'
import OpenAi from 'openapi'

const AI =  new OpenAi();


AI.chat.completions.create({
    model: ''
})