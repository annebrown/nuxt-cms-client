// plugins/ssr-logs.js----------------------------------------------------------
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('dev:ssr-logs', (logs) => {
        console.log('SSR Logs:', logs)

        // Process logs or send to a logging service
        logs.forEach(log => {
            // Process each log entry
            console.log(`Log type: ${log.type}, message: ${log.message}`)
        })
    })
})
// plugins/ssr-logs.js----------------------------------------------------------