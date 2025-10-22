# ✨ Minhas Tarefas - App de Organização Diária

Um aplicativo mobile elegante e intuitivo para gerenciamento de tarefas diárias, desenvolvido com React Native e Expo. Projetado com foco em design inclusivo e experiência do usuário, apresentando uma interface delicada em tons de rosa.

## 📱 Sobre o Projeto

O **Minhas Tarefas** é um aplicativo de lista de tarefas que permite aos usuários organizarem suas atividades diárias de forma simples e agradável. Com uma interface pensada para o público feminino, o app combina funcionalidade com um design acolhedor e motivador.

## ✨ Funcionalidades

- ✅ **Adicionar Tarefas**: Crie tarefas com título, descrição opcional e duração estimada
- 🎯 **Marcar como Concluída**: Sistema de checkbox para acompanhar o progresso
- 📊 **Contador de Progresso**: Visualize quantas tarefas foram concluídas
- 🗑️ **Excluir Tarefas**: Remova tarefas que não são mais necessárias
- ⏱️ **Duração Estimada**: Defina quanto tempo cada tarefa deve levar
- 💕 **Design Responsivo**: Interface adaptada para diferentes tamanhos de tela
- 🎨 **Tema Rosa Delicado**: Paleta de cores suave e harmoniosa

## 🛠️ Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma para desenvolvimento e build
- **TypeScript** - Superset JavaScript com tipagem estática
- **React Native Paper** - Biblioteca de componentes Material Design
- **React Native Safe Area Context** - Gerenciamento de áreas seguras

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

## 🚀 Como Executar o Projeto

### 1. Clone o repositório

```bash
git clone [https://github.com/seu-usuario/minhas-tarefas-app.git](https://github.com/Hosana09/minhas-tarefas-reactnative.git)
cd minhas-tarefas-app
```

### 2. Instale as dependências

```bash
npm install
```

ou

```bash
yarn install
```

### 3. Inicie o projeto

```bash
npx expo start
```

### 4. Execute no dispositivo

Após iniciar o projeto, você pode:

- Escanear o QR Code com o aplicativo **Expo Go** (disponível na App Store e Google Play)
- Pressionar `a` para abrir no emulador Android
- Pressionar `i` para abrir no simulador iOS (apenas macOS)
- Pressionar `w` para abrir no navegador web

## 📦 Dependências Principais

```json
{
  "expo": "~51.0.0",
  "react": "18.2.0",
  "react-native": "0.74.0",
  "react-native-paper": "^5.12.3",
  "react-native-safe-area-context": "4.10.1",
  "typescript": "~5.3.3"
}
```

## 🎨 Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Rosa Claro | `#FFF0F5` | Fundo principal |
| Rosa Médio | `#FFB6C1` | Cabeçalho e acentos |
| Rosa Vibrante | `#FF69B4` | Botões e elementos ativos |
| Rosa Escuro | `#FF1493` | Ícone de exclusão |
| Rosa Suave | `#FFE4E1` | Cards concluídos |

## 📱 Screenshots

<img width="739" height="1600" alt="image" src="https://github.com/user-attachments/assets/07d2ef37-e5dc-4ff3-9180-df5b4defa618" />
<img width="739" height="1600" alt="image" src="https://github.com/user-attachments/assets/d2943385-19c9-45cb-9e3a-fa055ebaaac8" />
<img width="739" height="1600" alt="image" src="https://github.com/user-attachments/assets/e5d1c80f-5f45-4447-9dfc-75981eba9909" />

## 🏗️ Estrutura do Projeto

```
minhas-tarefas-app/
├── App.tsx                 # Componente principal
├── app.json               # Configurações do Expo
├── package.json           # Dependências do projeto
├── tsconfig.json          # Configurações TypeScript
└── README.md             # Documentação
```

## 🎯 Interface

### Componentes Principais

- **Header**: Título do app e contador de progresso
- **FormCard**: Formulário para adicionar novas tarefas
- **TaskCard**: Card individual de cada tarefa
- **Checkbox**: Sistema de marcação de tarefas concluídas

### Estado da Aplicação

O app utiliza React Hooks para gerenciar o estado:

```typescript
interface Task {
  id: string;
  title: string;
  description: string;
  duration: string;
  completed: boolean;
}
```

## 💡 Funcionalidades Implementadas

- [x] Adicionar tarefas
- [x] Marcar tarefas como concluídas
- [x] Excluir tarefas
- [x] Campo de duração
- [x] Contador de progresso
- [x] Teclado responsivo
- [x] Safe Area para diferentes dispositivos

## 🔮 Melhorias Futuras

- [ ] Persistência de dados (AsyncStorage ou SQLite)
- [ ] Categorias de tarefas
- [ ] Notificações push
- [ ] Modo escuro
- [ ] Filtros (todas, concluídas, pendentes)
- [ ] Ordenação por data/prioridade
- [ ] Edição de tarefas existentes
- [ ] Calendário integrado

## 👩‍💻 Autora

Desenvolvido com 💕 por Hosana

- LinkedIn: [Hosana Azevedo Pires](https://www.linkedin.com/in/hosana-azevedo-pires/)
- GitHub: [@Hosana09](https://github.com/Hosana09)

---

⭐ Se este projeto te ajudou, considere dar uma estrela!
