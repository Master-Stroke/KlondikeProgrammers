function special_character_html() {
  var SCH1 = document.getElementById('text1').value;
  var SCH2 = document.getElementById('text2').value;
  var color1 = document.getElementById('color1').value;
  var color2 = document.getElementById('color2').value;
  
  SCH1 = SCH1.replaceAll('&nbsp;', '');
  SCH2 = SCH2.replaceAll('&nbsp;', '');
  SCH1 = SCH1.replaceAll('&#160;', '');
  SCH2 = SCH2.replaceAll('&#160;', '');

  SCH1 = SCH1.replaceAll('&ensp;', '');
  SCH2 = SCH2.replaceAll('&ensp;', '');
  SCH1 = SCH1.replaceAll('&#8194;', '');
  SCH2 = SCH2.replaceAll('&#8194;', '');

  SCH1 = SCH1.replaceAll('&emsp;', '');
  SCH2 = SCH2.replaceAll('&emsp;', '');
  SCH1 = SCH1.replaceAll('&#8195;', '');
  SCH2 = SCH2.replaceAll('&#8195;', '');

  SCH1 = SCH1.replaceAll('&lt;', '');
  SCH2 = SCH2.replaceAll('&lt;', '');
  SCH1 = SCH1.replaceAll('&#60;', '');
  SCH2 = SCH2.replaceAll('&#60;', '');

  SCH1 = SCH1.replaceAll('&gt;', '');
  SCH2 = SCH2.replaceAll('&gt;', '');
  SCH1 = SCH1.replaceAll('&#62;', '');
  SCH2 = SCH2.replaceAll('&#62;', '');

  SCH1 = SCH1.replaceAll('&amp;', '');
  SCH2 = SCH2.replaceAll('&amp;', '');
  SCH1 = SCH1.replaceAll('&#38;', '');
  SCH2 = SCH2.replaceAll('&#38;', '');

  SCH1 = SCH1.replaceAll('&quot;', '');
  SCH2 = SCH2.replaceAll('&quot;', '');
  SCH1 = SCH1.replaceAll('&#34;', '');
  SCH2 = SCH2.replaceAll('&#34;', '');

  SCH1 = SCH1.replaceAll('&apos;', '');
  SCH2 = SCH2.replaceAll('&apos;', '');
  SCH1 = SCH1.replaceAll('&#39;', '');
  SCH2 = SCH2.replaceAll('&#39;', '');

  SCH1 = SCH1.replaceAll('&laquo;', '');
  SCH2 = SCH2.replaceAll('&laquo;', '');
  SCH1 = SCH1.replaceAll('&#171;', '');
  SCH2 = SCH2.replaceAll('&#171;', '');

  SCH1 = SCH1.replaceAll('&raquo;', '');
  SCH2 = SCH2.replaceAll('&raquo;', '');
  SCH1 = SCH1.replaceAll('&#187;', '');
  SCH2 = SCH2.replaceAll('&#187;', '');

  SCH1 = SCH1.replaceAll('&lsquo;', '');
  SCH2 = SCH2.replaceAll('&lsquo;', '');
  SCH1 = SCH1.replaceAll('&#8216;', '');
  SCH2 = SCH2.replaceAll('&#8216;', '');

  SCH1 = SCH1.replaceAll('&rsquo;', '');
  SCH2 = SCH2.replaceAll('&rsquo;', '');
  SCH1 = SCH1.replaceAll('&#8217;', '');
  SCH2 = SCH2.replaceAll('&#8217;', '');

  SCH1 = SCH1.replaceAll('&sbquo;', '');
  SCH2 = SCH2.replaceAll('&sbquo;', '');
  SCH1 = SCH1.replaceAll('&#8218;', '');
  SCH2 = SCH2.replaceAll('&#8218;', '');

  SCH1 = SCH1.replaceAll('&ldquo;', '');
  SCH2 = SCH2.replaceAll('&ldquo;', '');
  SCH1 = SCH1.replaceAll('&#8220;', '');
  SCH2 = SCH2.replaceAll('&#8220;', '');

  SCH1 = SCH1.replaceAll('&rdquo;', '');
  SCH2 = SCH2.replaceAll('&rdquo;', '');
  SCH1 = SCH1.replaceAll('&#8221;', '');
  SCH2 = SCH2.replaceAll('&#8221;', '');

  SCH1 = SCH1.replaceAll('&bdquo;', '');
  SCH2 = SCH2.replaceAll('&bdquo;', '');
  SCH1 = SCH1.replaceAll('&#8222;', '');
  SCH2 = SCH2.replaceAll('&#8222;', '');

  document.forms["general"].reset();
  
  document.getElementById('text1').innerHTML = SCH1;
  document.getElementById('text2').innerHTML = SCH2;
  document.getElementById('color1').value = color1;
  document.getElementById('color2').value = color2;
}