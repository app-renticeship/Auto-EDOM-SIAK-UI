var entries = document.querySelectorAll("input[type=radio]");
var nilai = 3 // choose between 1-5 score
for(i = 0; i < entries.length; i++)
{
    var entry = entries[i];
    if(entry.value==nilai && !entry.checked)
    {
            entry.checked = "checked";
    }
}
