

interface style {
    "hljs-comment":           SyntaxColor;
    "hljs-quote":             SyntaxColor;
    "hljs-variable":          SyntaxColor;
    "hljs-template-variable": SyntaxColor;
    "hljs-tag":               SyntaxColor;
    "hljs-name":              SyntaxColor;
    "hljs-selector-id":       SyntaxColor;
    "hljs-selector-class":    SyntaxColor;
    "hljs-regexp":            SyntaxColor;
    "hljs-deletion":          SyntaxColor;
    "hljs-number":            SyntaxColor;
    "hljs-built_in":          SyntaxColor;
    "hljs-builtin-name":      SyntaxColor;
    "hljs-literal":           SyntaxColor;
    "hljs-type":              SyntaxColor;
    "hljs-params":            SyntaxColor;
    "hljs-meta":              SyntaxColor;
    "hljs-link":              SyntaxColor;
    "hljs-attribute":         SyntaxColor;
    "hljs-string":            SyntaxColor;
    "hljs-symbol":            SyntaxColor;
    "hljs-bullet":            SyntaxColor;
    "hljs-addition":          SyntaxColor;
    "hljs-title":             SyntaxColor;
    "hljs-section":           SyntaxColor;
    "hljs-keyword":           SyntaxColor;
    "hljs-selector-tag":      SyntaxColor;
    "hljs":                     Hljs;
    "hljs-emphasis":          HljsEmphasis;
    "hljs-strong":            HljsStrong;
}
declare module "style" {
    export default style
}

export interface Hljs {
    display:    string;
    overflowX:  string;
    background: string;
    color:      string;
    padding:    string;
}

export interface SyntaxColor {
    color: string;
}

export interface HljsEmphasis {
    fontStyle: string;
}

export interface HljsStrong {
    fontWeight: string;
}
