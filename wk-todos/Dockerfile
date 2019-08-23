FROM mcr.microsoft.com/dotnet/core/sdk:2.2 AS build
WORKDIR /app

# copy csproj and restore as distinct layers
COPY Todos.Api/*.csproj ./Todos.Api/
COPY Todos.Core/*.csproj ./Todos.Core/
COPY Todos.Services/*.csproj ./Todos.Services/
COPY Todos.Repositories/*.csproj ./Todos.Repositories/
WORKDIR /app/Todos.Api
RUN dotnet restore

# copy and publish app and libraries
WORKDIR /app/
COPY Todos.Api/. ./Todos.Api/
COPY Todos.Core/. ./Todos.Core/
COPY Todos.Services/. ./Todos.Services/
COPY Todos.Repositories/. ./Todos.Repositories/
WORKDIR /app/Todos.Api
RUN dotnet publish -c Release -o out

# copy build artifacts into runtime image
FROM mcr.microsoft.com/dotnet/core/aspnet:2.2 AS runtime
WORKDIR /app
COPY --from=build /app/Todos.Api/out ./
EXPOSE 80
ENTRYPOINT ["dotnet", "Todos.Api.dll"]