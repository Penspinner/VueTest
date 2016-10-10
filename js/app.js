
var app = new Vue
({
    el: '#app',
    
    data: 
    {
        message: 'Hello',
        seen: true,
        url: 'http://stevenliao.tech'
    },
    
    methods: 
    {
        toggleSeen: function()
        {
            this.seen = !this.seen;
        }
    },
    
    filters: 
    {
        uppercase: function(value)
        {
            if (!value) return "";
            return value.toUpperCase();
        }
    }
});