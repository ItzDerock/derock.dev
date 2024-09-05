{ pkgs, lib, config, inputs, ... }:

{
  env.PUPPETEER_EXECUTABLE_PATH = "${pkgs.chromium}/bin/chromium";
  packages = [ pkgs.chromium ];

  # https://devenv.sh/languages/
  languages.javascript.enable = true;
  languages.typescript.enable = true;
  languages.javascript.pnpm.enable = true;

  # See full reference at https://devenv.sh/reference/options/
}
