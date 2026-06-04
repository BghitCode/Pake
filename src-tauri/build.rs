fn main() {
    println!("cargo:rerun-if-changed=.bghitapp/bghitapp.json");
    println!("cargo:rerun-if-changed=.bghitapp/tauri.conf.json");
    tauri_build::build()
}
