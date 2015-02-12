<?php
$htmlStr = 
"<root>\n".
" <folders>\n".
" <folder>\n".
"\t <name>Photos</name>\n".
"\t <files>\n";

foreach (glob("./Photos/*") as $filename) {
	$tmpFileName = substr( $filename, ( strrpos( $filename, "\\" ) +1 ) );
	$tmpFileExt = substr( $filename, ( strrpos( $filename, "." ) +1 ) );

$htmlStr .= "\t\t <file>\n";
$htmlStr .= "\t\t\t <name>" . $tmpFileName . "</name>\n";
$htmlStr .= "\t\t\t <type>" . $tmpFileExt . "</type>\n";
$htmlStr .= "\t\t </file>\n";
}

$htmlStr .= 
"\t </files>\n".
"</folder>\n".
" <folder>\n".
"\t <name>Specs</name>\n".
"\t <files>\n";

foreach (glob("./Specs/*") as $filename) {
	$tmpFileName = substr( $filename, ( strrpos( $filename, "\\" ) +1 ) );
	$tmpFileExt = substr( $filename, ( strrpos( $filename, "." ) +1 ) );

$htmlStr .= "\t\t <file>\n";
$htmlStr .= "\t\t\t <name>" . $tmpFileName . "</name>\n";
$htmlStr .= "\t\t\t <type>" . $tmpFileExt . "</type>\n";
$htmlStr .= "\t\t </file>\n";
}

$htmlStr .= 
"\t </files>\n".
"\t</folder>\n".
" <folder>\n".
"\t <name>Videos</name>\n".
"\t <files>\n";

foreach (glob("./Videos/*") as $filename) {
	$tmpFileName = substr( $filename, ( strrpos( $filename, "\\" ) +1 ) );
	$tmpFileExt = substr( $filename, ( strrpos( $filename, "." ) +1 ) );

$htmlStr .= "\t\t <file>\n";
$htmlStr .= "\t\t\t <name>" . $tmpFileName . "</name>\n";
$htmlStr .= "\t\t\t <type>" . $tmpFileExt . "</type>\n";
$htmlStr .= "\t\t </file>\n";
}

$htmlStr .= 
"\t </files>\n".
"\t</folder>\n".
" </folders>\n".
"</root>\n";
echo $htmlStr;
?>