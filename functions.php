<?php
/**
 * Recommended way to include parent theme styles.
 * (Please see http://codex.wordpress.org/Child_Themes#How_to_Create_a_Child_Theme)
 *
 */  

add_action( 'wp_enqueue_scripts', 'cashscroll_style' );
				function cashscroll_style() {
					wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
					wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css', array('parent-style') );
				}

/**
 * Your code goes below.
 */

// Enable basic functions for classic editor
function add_editor_buttons($buttons) {
    $buttons[] = 'fontselect';
    $buttons[] = 'fontsizeselect';
    $buttons[] = 'backcolor';
    $buttons[] = 'underline';
    $buttons[] = 'hr';
    $buttons[] = 'cut';
    $buttons[] = 'copy';
    $buttons[] = 'paste';
    return $buttons;
}
add_filter("mce_buttons_2", "add_editor_buttons");

// 页面链接添加 html 后缀
add_action('init', 'html_page_permalink', -1);
function html_page_permalink() {
    global $wp_rewrite;
    if ( !strpos($wp_rewrite->get_page_permastruct(), '.html')){
        $wp_rewrite->page_structure = $wp_rewrite->page_structure . '.html';
    }
}

// 添加斜杠
function nice_trailingslashit($string, $type_of_url) {
    if ( $type_of_url != 'single' && $type_of_url != 'page' )
      $string = trailingslashit($string);
    return $string;
}
add_filter('user_trailingslashit', 'nice_trailingslashit', 10, 2);

// 代码高亮 Prism.js
function add_prism() {
        wp_register_style(
            'prismCSS', 
            get_stylesheet_directory_uri() . '/prism.css' //自定义路径
         );
          wp_register_script(
            'prismJS',
            get_stylesheet_directory_uri() . '/prism.js' //自定义路径
         );
        wp_enqueue_style('prismCSS');
        wp_enqueue_script('prismJS');
    }
add_action('wp_enqueue_scripts', 'add_prism');

// Add Shortcode
function preCode( $atts , $content = null ) {

	// Attributes
	$atts = shortcode_atts(
		array(
			'language' => 'markup',
		),
		$atts
	);

	return '<pre><code class="language:'.$language.'"></code></pre>';

}
add_shortcode( 'PreCode', 'preCode' );

?>