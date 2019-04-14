const rules = [
    //ul
    [/^\s*\n\*/gm, '<ul>\n*'],
    [/^(\*.+)\s*\n([^*])/gm, '$1\n</ul>\n\n$2'],
    [/^\*(.+)/gm, '<li>$1</li>'],
    
    //ol
    [/^\s*\n\d\./gm, '<ol>\n1.'],
    [/^(\d\..+)\s*\n([^\d.])/gm, '$1\n</ol>\n\n$2'],
    [/^\d\.(.+)/gm, '<li>$1</li>'],
    
    //blockquote
    [/^>(.+)/gm, '<blockquote>$1</blockquote>'],
    
    // for h
    [/[#]{6}(.+)/g, '<h6>$1</h6>'],
    [/[#]{5}(.+)/g, '<h5>$1</h5>'],
    [/[#]{4}(.+)/g, '<h4>$1</h4>'],
    [/[#]{3}(.+)/g, '<h3>$1</h3>'],
    [/[#]{2}(.+)/g, '<h2>$1</h2>'],
    [/[#]{1}(.+)/g, '<h1>$1</h1>'],

    //alt h
    [/^(.+)\n=+/gm, '<h1>$1</h1>'],
    [/^(.+)\n-+/gm, '<h2>$1</h2>'],
    
    //images
    [/!\[([^\]]+)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" />'],
    
    //links
    [/[[]{1}([^\]]+)[\]]{1}[(]{1}([^)"]+)("(.+)")?[)]{1}/g, '<a href="$2" title="$4">$1</a>'],
    
    //font styles
    [/[*_]{2}([^*_]+)[*_]{2}/g, '<b>$1</b>'],
    [/[*_]{1}([^*_]+)[*_]{1}/g, '<i>$1</i>'],
    [/[~]{2}([^~]+)[~]{2}/g, '<del>$1</del>'],
    
    //pre
    // [/^\s*\n```(([^\s]+))?/gm, '<pre class="$2">'],
    // [/^```\s*\n/gm, '</pre>\n\n'],
    [/^\s*\n```(([^\s]+))?/gm, '<pre>$2'],
    [/^```\s*\n/gm, '</pre>\n\n'],
    
    //code
    [/[`]{1}([^`]+)[`]{1}/g, '<code>$1</code>'],
    
    //p
    [/^\s*(\n)?(.+)/gm, function(m){
        return  /<(\/)?(h\d|ul|ol|li|blockquote|pre|img)/.test(m) ? m : '<p>'+m+'</p>';
    }],
    
    //strip p from pre
    // [/(<pre.+>)\s*\n<p>(.+)<\/p>/gm, '$1$2'],
    [/(<pre.+>)\s*\n<p>(.+)<\/p>/gm, '$1$2'],

    [/\n\n/g, '<br>'],
    
];

export default {
    bind(el) {
        var html = el.textContent;
        rules.forEach(([rule, template]) => {
            html = html.replace(rule, template);
        })
        el.innerHTML = html;
    }
}