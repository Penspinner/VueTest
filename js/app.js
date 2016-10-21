
var app = new Vue
({
    el: '#app',
    
    data: 
    {
        message: 'Hello',
        seen: true,
        url: 'http://stevenliao.tech',
        firstName: 'Steven',
        lastName: 'Liao',
        classObject: 
        {
            active: true,
            big: false
        },
        items: 
        [
            {title: 'Fuzzy', price: 40},
            {title: 'Beans', price: 50}
        ],
        numbers: [12, 3, 3, 3, 213, 1, 12, 4523, 2, 259, 9, 0]
    },
    
    // Re-evaluated when dependencies change
    // Use computed when you want to cache
    computed:
    {
        fullName: 
        {
            get: function()
            {
                return this.firstName + ' ' + this.lastName;
            },
            
            // Example: app.fullName = 'Rick Astley' invokes this setter
            set: function(newName)
            {
                var nameSplit = newName.split(' ');
                this.firstName = nameSplit[0];
                this.lastName = nameSplit[nameSplit.length - 1];
            }
        },
        evenNumbers: function()
        {
            return this.numbers.filter(function(n) {
                return n % 2 === 0;
            });
        }
    },
    
    // Method invocations always happen on re-renders
    // Use method when you don't want to cache
    methods: 
    {
        toggleSeen: function()
        {
            this.seen = !this.seen;
        },
        even: function(numbers)
        {
            return numbers.filter(function(n)
            {
                return n % 2 === 0;
            });
        }
    },
    
    // Methods that change data based on other data
    // Best for asynchronous/expensive operations in response to changed data
    watch:
    {
        
    },
    
    filters: 
    {
        uppercase: function(value)
        {
            if (!value) return "";
            return value.toUpperCase();
        },
        reverse: function(value)
        {
            if (!value) return "";
            return value.split('').reverse().join('');
        }
    }
});